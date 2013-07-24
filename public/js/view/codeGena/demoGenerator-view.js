/**
 * 
 * 本文件是为了节省做demo的时间，生成代码的入口。
 * 
 * 注意事项：
 * 1. 代码生成在./demoDist/modleName 文件夹中;
 * 2. 将生成的webapp文件夹中的js和template文件夹复制到public文件下;
 * 3. 在./public/js/router/app-router.js中增加路由，即可看到生成的页面；
 * 4. 生成的页面不是最终版，需根据具体的需求，进行细调。
 * 
 * 输入：模块名，模块的中文名，是否有tab页，表格中的参数
 * 
 * 输出：
 * 1. 无tab页时，下发的数据格式为
 * 
 * _mymodel = {
 *   moduleName : "",    //模块名
 *   moduleNameZh : "",  //模块中文
 *   items : [{          //表格参数的数组：参数名/类型/参数中文
 *     fieldName : "",
 *     fieldType : "",
 *     fieldNameZh : ""
 *   },{
 *     fieldName : "",
 *     fieldType : "",
 *     fieldNameZh : ""
 *   }]   
 * }
 * 
 * 2. 有tab页时，下发的数据格式为
 * 
 * _mymodel = {
 *   moduleName : "",    //模块名
 *   moduleNameZh : "",  //模块中文
 *   tabs : [{           //tab的数组：tab名/tab中文/tab中的表格参数的数组
 *     tabName : "",
 *     tabNameZh : "",
 *     items: [{
 *       fieldName: "",
 *       fieldType: "",
 *       fieldNameZh: ""
 *     },{
 *       fieldName: "",
 *       fieldType: "",
 *       fieldNameZh: ""
 *     }]  
 *   },{
 *     tabName : "",
 *     tabNameZh : "",
 *     items: [{
 *       fieldName: "",
 *       fieldType: "",
 *       fieldNameZh: ""
 *     },{
 *       fieldName: "",
 *       fieldType: "",
 *       fieldNameZh: ""
 *     }]  
 *   }]
 *    
 * }
 * **/

define(['underscore', 'resthub', 'und!template/codeGena/demoGenerator'], 
function(_, Resthub, template) {
	var DemoGenaView = Resthub.View.extend({
	    
        template : template,
        
        hasTabs : false,  //默认无tab页
        
		events : {
		    /** 选择是否生成有tab的页面 **/
		    'click input[name="hasTabs"]' : 'showEditTabTable',
		    
		    /** tab页编辑的事件，新增tab和编辑tab中的表格参数 **/
		    'click .btn-add-tab'          : 'addTab',
		    'click button.btn-edit-items' : 'editTabsItem',
		    
		    /** 表格参数 **/
			'click button.btn-add'    : 'addField',
			'click button.btn-delete' : 'deleteField',
            'click .gatherItems'      : 'gatherItems',
            
            /** 下发数据 **/
			'click button.generateCode' : 'generateCode',
			
			/** 阻止form自动提交做的特殊处理 **/
			'submit form'               : 'submitForm'
		},

		initialize : function() {
			var _self = this;
			_self.render();
		},

		render : function() {
			var _self = this;
			_self.$el.html(_self.template());
			_.defer(function(){
			    
			    //初始化子模板
                _self.tpl = {};
			    _self.tpl.tabTpl = _.template($('#editTab').html());
			    _self.tpl.itemTpl = _.template($('#editItem').html());
			    
			    //默认显示无tab页时的参数编辑表格
                _self.$el.find("#itemContainer").append(_self.tpl.itemTpl);
			});
			return _self;
		},
		
		/**
		 * 全局变量初始化
		 * **/
		init : function(){
		    var _self = this;
		    
		    _self.tabs = null;        //准备下发的tabs数组
            _self.items = null;       //准备下发的items数组
            _self.tabEditNow = null;  //标记正在编辑表格参数的tab行数，tr数组第一个是0
		},
		
		showEditTabTable : function(){
		    var _self = this;
		    _self.$el.find("span.myClass").empty();  //清空下发的JSON显示
		    
		    _self.init();
		    _self.hasTabs = (_self.$el.find('input[name="hasTabs"]:checked').val()) ? true:false;
		    
		    if(_self.hasTabs){
		        _self.tabs = new Array();
		        _self.$el.find("#tabContainer").html(_self.tpl.tabTpl);
		        _self.$el.find("#itemContainer").empty();
		    }else{
		        _self.$el.find("#tabContainer").empty();
		        _self.$el.find("#itemContainer").empty();
		        _self.$el.find("#itemContainer").append(_self.tpl.itemTpl);
		    }
		},
		
		addTab : function(e){
		    var _self = this;
            var $tbody = _self.$el.find("tbody.myTabs");
		    var $tde = $(e.target).parents("td");
			var _idx = _self.tabEditNow + 2; //用于新增时，显示序号
            
            $tde.empty();
            _self.$el.find("#itemContainer").empty();    
            
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
			    _self.$el.find("#itemContainer").append(_self.tpl.itemTpl);
			    
			    var $tbody = $("tbody.myTabs");
			    var $trs = $tbody.find('tr');
			    var $etr = $(e.target).parents('tr');
			    _self.tabEditNow = $trs.index($etr);
			    
	            var _idx = _self.tabEditNow + 1;
	            _self.$el.find("span.tabNo").html("第 " + _idx + " 个tab");
	            
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
            _self.$el.find("span.myItems").html(JSON.stringify(_myitems));
            
            if(_self.hasTabs){
                _.extend(_self.tabs[_self.tabEditNow],_myitems);
                _self.$el.find("button.btn-edit-items").removeClass("btn-edit-items")
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
            
            //1 判断是否有表格参数items
            
            //1.1 _self.items存在时，为无tab的情况，无错误提示；
            //_self.items不存在时，分情况
            if(!_self.items){
                
                //1.2 _self.tabs也不存在，提示
            	if(!_self.tabs){
            	    
            		window.globalNotify({
						type:"error",
						htmlContent:"请生成items先！"
					});
					return;
					
            	}else{
            	    
            	    //1.3 _self.tabs为空数组，或者tabs里没有items信息，提示
            		if(!_self.tabs[_self.tabEditNow] || !_self.tabs[_self.tabEditNow].items){
            			window.globalNotify({
							type:"error",
							htmlContent:"请生成items先！"
						});
						return;
            		}
            	}
            }
		        
		    //2 form验证模块名必须输入    
            if(!_self.$el.find("form.module-form").valid()) return;
            
            //3 收集下发的数据
            var _mymodel = {};
            _mymodel.moduleName = _self.$el.find('input[name="moduleName"]').val();
            _mymodel.moduleNameZh = _self.$el.find('input[name="moduleNameZh"]').val();
            
            if(_self.hasTabs){
                _.extend(_mymodel, {tabs:_self.tabs});
            }else{
                _.extend(_mymodel, _self.items);
            }
            			
			_self.$el.find("span.myClass").html(JSON.stringify(_mymodel));

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