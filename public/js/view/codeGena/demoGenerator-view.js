define(['underscore', 'resthub', 'und!template/codeGena/demoGenerator'], 
function(_, Resthub, template) {
	var DemoGenaView = Resthub.View.extend({
	    
        template : template,
        
        hasTabs : false,
        
		events : {
		    'click input[name="hasTabs"]' : 'showEditTabTable',
		    
		    'click .btn-add-tab' : 'addTab',
		    'click button.btn-edit-items' : 'editTabsItem',
		    
			'click button.btn-add'    : 'addField',
			'click button.btn-delete' : 'deleteField',
            'click .gatherItems' : 'gatherItems',
            
			'click button.generateCode' : 'generateCode',
			'submit form' : 'submitForm'
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function() {
			var _self = this;
			_self.$el.html(_self.template());
			_.defer(function(){
			    //初始化模板
                _self.tpl = {};
			    _self.tpl.tabTpl = _.template($('#editTab').html());
			    _self.tpl.itemTpl = _.template($('#editItem').html());
                $("#itemContainer").append(_self.tpl.itemTpl);
			});
			return _self;
		},
		
		showEditTabTable : function(){
		    var _self = this;
		    _self.$el.find("span.myClass").empty();
		    _self.tabs = null;
		    _self.items = null;
		    _self.tabEditNow = null;
		    _self.hasTabs = (_self.$el.find('input[name="hasTabs"]:checked').val()) ? true:false;
		    
		    if(_self.hasTabs){
		        _self.tabs = new Array();
		        $("#tabContainer").html(_self.tpl.tabTpl);
		        $("#itemContainer").empty();
		    }else{
		        $("#tabContainer").empty();
		        $("#itemContainer").empty();
		        $("#itemContainer").append( _self.tpl.itemTpl);
		    }
		},
		
		addTab : function(e){
		    var _self = this;
		    var $tde = $(e.target).parents("td");

			var _idx = _self.tabEditNow + 2;
            var $tbody = $("tbody.myTabs");

            $tde.empty();
            $("#itemContainer").empty();    
            
            $tbody.append('<tr><td>' + _idx + '</td>'
                    +   '<td><input type="text" name="tabName" value="" placeholder="tab页名"/></td>'
                    +   '<td><input type="text" name="tabNameZh" value="" placeholder="tab页中文"/></td>'
                    +   '<td class="tabOpt">'
                    +   '<button class="btn btn-small btn-edit-items">edit-items</button>'
	                    +   '</td></tr>'); 	    	
		},
		
		editTabsItem : function(e){
		    var _self = this;
		    var $tde = $(e.target).parents("td");
		    
		    var b_tabNameZh = !$tde.parent('tr').find('input[name="tabNameZh"]').val();
		    var b_tabName = !$tde.parent('tr').find('input[name="tabName"]').val();
		    
		    if(b_tabNameZh || b_tabName){
		    	window.globalNotify({
					type:"error",
					htmlContent:"请输入tab信息！"
				});
				return;
		    }else{
		    	$(e.target).prop("disabled","disabled");
			    $("#itemContainer").append( _self.tpl.itemTpl);
			    
			    var $tbody = $("tbody.myTabs");
			    var $trs = $tbody.find('tr');
			    var $etr = $(e.target).parents('tr');
			    _self.tabEditNow = $trs.index($etr);
			    
	            var _idx = _self.tabEditNow + 1;
	            $("span.tabNo").html("第 " + _idx + " 个tab");
	            
			    var _tab = {};
			    _tab.tabName = $etr.find("input[name='tabName']").val();
			    _tab.tabNameZh = $etr.find("input[name='tabNameZh']").val();
			    _self.tabs[_self.tabEditNow] = _tab;
		    }
		},
		
		gatherItems : function(){
		    var _self = this;
		    
		    if(!_self.$el.find("form.myItems").valid()) return;
		    
		    var _data = _self.$el.find("form.myItems").serializeObject();
		    
		    var _myitems = {};
            _myitems.items  = new Array();
            
            if(_.isArray(_data.fieldName)){
                _.each(_data.fieldName, function(data,idx){
                _myitems.items.push({
                    fieldName:_data.fieldName[idx],
                    fieldType:_data.fieldType[idx],
                    fieldNameZh:_data.fieldNameZh[idx]
                    });
                })
            }else{
                _myitems.items.push({
                    fieldName:_data.fieldName,
                    fieldType:_data.fieldType,
                    fieldNameZh:_data.fieldNameZh
                    });             
            }
            $("span.myItems").html(JSON.stringify(_myitems));
            
            if(_self.hasTabs){
                _.extend(_self.tabs[_self.tabEditNow],_myitems);
                $("button.btn-edit-items").removeClass("btn-edit-items")
                                            .addClass("btn-add-tab")
                                            .html("add-tab")
                                            .removeProp("disabled","disabled");
            }else{
                _self.items = _myitems;
            }
		},
		
		submitForm : function(){
			console.log("submitting...");
			return false;	
		},
		
		addField : function(e){
			var _self = this;
			var $tbody = _self.$el.find("tbody.myFields");

			if(!_self.$el.find("form.myItems").valid()) return;

			$(e.target).removeClass("btn-add")
						.addClass("btn-delete")
						.html("delete");
			$tbody.append('<tr><td><input type="text" name="fieldName" class="grd-white" value="" placeholder="属性名"/></td>'
					+	'<td><select name="fieldType"><option value="string">String</option><option value="date">Date</option>'
					+   '<option value="number">Number</option><option value="boolean">Boolean</option></select></td>'
					+	'<td><input type="text" name="fieldNameZh" class="grd-white" value="" placeholder="属性中文"/></td>'
					+	'<td class="fieldOpt">'
					+	'<button class="btn btn-small btn-add">add</button>'
					+	'</td></tr>');
		},
		
		deleteField : function(e){
			$(e.target).closest("tr").empty();	
		},
		
		generateCode : function(){
            var _self = this;
            
            if(!_self.items){
            	if(!_self.tabs){
            		window.globalNotify({
						type:"error",
						htmlContent:"请生成items先！"
					});
					return;
            	}else{
            		if(!_self.tabs[_self.tabEditNow] || !_self.tabs[_self.tabEditNow].items){
            			window.globalNotify({
							type:"error",
							htmlContent:"请生成items先！"
						});
						return;
            		}
            	}
            }
		        
            if(!_self.$el.find("form.module-form").valid()) return;
            
            //收集下发的数据
            var _mymodel = {};
            _mymodel.moduleName = _self.$el.find('input[name="moduleName"]').val();
            _mymodel.moduleNameZh = _self.$el.find('input[name="moduleNameZh"]').val();
            
            if(_self.hasTabs){
                _.extend(_mymodel, {tabs:_self.tabs});
            }else{
                _.extend(_mymodel, _self.items);
            }
            			
			$("span.myClass").html(JSON.stringify(_mymodel));

			$.ajax({
				type:"POST",
				url:"/api/genademo",
				data:_mymodel
			}).done(function(data){
				// console.log("back is ok...");
				console.log(data);
			}).fail(function(){
				console.log("something is wrong at node...");
			});
			
		}
		
	});
	return DemoGenaView;
}); 