/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-financeInitialize'],
function(_, Backbone, Resthub, financeInitializeTmpl){
  var SalaryFinanceInitializeView = Resthub.View.extend({
    template: financeInitializeTmpl,
    
    events: {
    	'click .editPeopleNum':'edit',
    	'click .returnShow':'return1'
    		
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
	},
	
	edit : function(){
		var _self = this;
		_self.$el.find('#showNumber').hide();
		_self.$el.find('#editNumber').show();
	},
	
	return1 : function(){
		var _self = this;
		_self.$el.find('#editNumber').hide();
		_self.$el.find('#showNumber').show();
	}
  });
  return SalaryFinanceInitializeView;
});