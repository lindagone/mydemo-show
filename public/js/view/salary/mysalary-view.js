/**
 * 我的工资view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/mysalary','view/salary/mysalary-single-view','view/salary/mysalary-comprehensive-view'],
function(_, Backbone, Resthub, baseTmpl,MySalarySingleView,MySalaryComprehensiveView){
  var MysalaryView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	
    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认我最新的一条工资，并展示
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		//单次查看和综合查看定义在2个不同的view中
		new MySalarySingleView({root:$('#home')});
		new MySalaryComprehensiveView({root:$('#profile')});
		return _self;
	}
	
  });
  return MysalaryView;
});