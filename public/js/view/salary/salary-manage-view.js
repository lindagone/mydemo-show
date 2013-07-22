/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-manage'],
function(_, Backbone, Resthub, baseTmpl){
  var SalaryManageView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .salaryList':'showSalaryList',
    	'click .returnMain':'returnMain',
    	'click #importbybatch':'importbybatch'	
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
	}
	
  });
  return SalaryManageView;
});