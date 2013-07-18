/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-itemInitialize'],
function(_, Backbone, Resthub, itemInitializeTmpl){
  var SalaryItemInitializeView = Resthub.View.extend({
    template: itemInitializeTmpl,
    
    events: {
    	
    },
    
    initialize: function(options) {
    	var _self = this;

        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
		
		return _self;
	}
	
  });
  return SalaryItemInitializeView;
});