/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-maintainitem'],
function(_, Backbone, Resthub, maintainitemTmpl,SalaryListDetailView){
  var SalaryMaintainItemView = Resthub.View.extend({
    template:maintainitemTmpl,
    
    events: {
    	'click .salaryList' : 'editSalaryList'
    },
    
    initialize: function(options) {
    	var _self = this;
		
		this.parent = options.parent;
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());			
		return _self;
	},
	//点击工资条明细按钮，在父页面加载一个新的view
	editSalaryList : function(){
		var _self = this;
		_self.parent.editSalaryList();
		
	}
	
  });
  return SalaryMaintainItemView;
});