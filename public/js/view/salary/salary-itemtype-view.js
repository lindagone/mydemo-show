/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-itemtype'],
function(_, Backbone, Resthub, itemTypeTmpl){
  var SalaryItemTypeView = Resthub.View.extend({
    template: itemTypeTmpl,
    
    events: {
    	//'click .salaryList' : 'editSalaryList'
    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认我最新的一条工资，并展示
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
		
		
		return _self;
	}
	
  });
  return SalaryItemTypeView;
});