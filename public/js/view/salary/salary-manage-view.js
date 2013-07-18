/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-manage','view/salary/salary-maintainitem-view','view/salary/salary-iteminitialize-view','view/salary/salary-financeInitialize-view','view/salary/salary-itemtype-view','view/salary/salary-listdetail-view'],
function(_, Backbone, Resthub, baseTmpl,SalaryMaintainItemView,SalaryItemInitializeView,SalaryFinanceInitializeView,SalaryItemTypeView,SalaryListDetailView){
  var SalaryManageView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click  #showOrg' : 'showeditSalaryMain' 	
    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认我最新的一条工资，并展示
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		//加载tab选项内容
		new SalaryMaintainItemView({root:$('#editSalaryMain'),parent:this});
		new SalaryItemInitializeView({root:$('#itemInitialize')});
		new SalaryFinanceInitializeView({root:$('#financialCode')});
		new SalaryItemTypeView({root:$('#typeInitialize')});
		
		return _self;
	},
	//点击工资条明细进入新页面,它和工资条维护使用的是一个根元素
	editSalaryList : function(){
		var _self = this;
		new SalaryListDetailView({root:$('#editSalaryMain')});	
	},
	//如果单击工资条明细后，第一个tab项默认会始终显示工资明细界面，
	//这个方法的目的是：在单击其它tab项后，返回第一个tab项时，加载初始界面，供演示调用，后期可以考虑废弃
	showeditSalaryMain:function(){	
		new SalaryMaintainItemView({root:$('#editSalaryMain'),parent:this});
	}
	
  });
  return SalaryManageView;
});