/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-manage2'],
function(_, Backbone, Resthub, baseTmpl){
  var SalaryManageView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .salaryList':'showSalaryList',
    	'click .returnMain':'returnMain',
    	'click #importbybatch':'importbybatch',
    	'click .editPeopleNum':'editPeopleNum',
    	'click .returnShowList':'returnShowList',
    	// 'click .btn-delete':'deleteItem',
    	'click .uploaderAll':'uploaderAll'	
    },
    
    initialize: function(options) {
    	var _self = this;
		
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
		return _self;
	},
		
	showSalaryList : function(){
		$(".salarySetup").hide();
		$("#editSalaryMain").hide();
		$("#importInfo").hide();
		$("#EditSalaryList").show();
	},
	
	returnMain : function(){
		$("#EditSalaryList").hide();
		$("#importInfo").hide();
		$(".salarySetup").show();
		$("#editSalaryMain").show();
	},
	
	importbybatch : function(){
		$(".salarySetup").hide();
		$("#EditSalaryList").hide();
		$("#editSalaryMain").hide();
		$("#importInfo").show();
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
		alert("该条目已经被别的表引用，不能做删除操作。");
	},
	
	uploaderAll : function(){
		alert("调用全局的导入");
	}
	
  });
  return SalaryManageView;
});