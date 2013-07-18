/**
 * 我的工资view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/mysalary-single'],
function(_, Backbone, Resthub, singleTmpl){
  var MySalarySingleView = Resthub.View.extend({
    template: singleTmpl,
    
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
  return MySalarySingleView;
});