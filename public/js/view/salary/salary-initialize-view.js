/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-initialize'],
function(_, Backbone, Resthub, baseTmpl){
  var SalaryInitView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .editPeopleNum':'editPeopleNum',
    	'click .returnShowList':'returnShowList',
    	'click .btn-delete':'deleteItem'
    },
    
    initialize: function(options) {
    	var _self = this;
		
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		_.defer(function(){
			$('[data-toggle="popover"]').popover({
				html:true,
				title:"直接移到：",
				content:$("#popoverContainer").html(),
				placement:"bottom",
				container:$("#main")
			});
		});
		return _self;
	},
	
	editPeopleNum : function(){
		$("#showNumber").hide();
		$("#editNumber").show();
	},
	
	returnShowList : function(){
		$("#editNumber").hide();
		$("#showNumber").show();
	},
	
	deleteItem : function(){
		alert("项目被引用，不能删除。");
	}
	
  });
  return SalaryInitView;
});