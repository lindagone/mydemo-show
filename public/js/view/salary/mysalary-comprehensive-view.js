/**
 * 我的工资-综合查看view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/mysalary-comprehensive'],
function(_, Backbone, Resthub, baseTmpl){
  var MySalaryComprehensiveView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .btn-sure':'showResults'
    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认我最新的一条工资，并展示
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
//		new MailListView({root : _self.$el.find('#mailContainer'), boxType: "notTrash"});
		setTimeout(function(){
         	$('#begintime').datepicker({dateFormat: 'yy-mm-dd'}); 
        	$('#endtime').datepicker({dateFormat: 'yy-mm-dd'});   
         },0);
		return _self;
	},
	//目前设计查询和查询结果在一个界面中，输入查询条件后，单击确定按钮触发
	showResults:function(){
		$('#comprehensiveDetail').show();
	}
	
	
  });
  return MySalaryComprehensiveView;
});