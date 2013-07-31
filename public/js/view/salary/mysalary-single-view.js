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
    	'click .printsingle' : 'printsingle'
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
	
	printsingle : function(){
		window.open("/printer/salary/myprinter.html");
	}
	
  });
  return MySalarySingleView;
});