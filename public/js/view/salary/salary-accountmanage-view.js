/**
 * 套账管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-accountmanage', ],
function(_, Backbone, Resthub, baseTmpl){
  var AccountManageView = Resthub.View.extend({
    template: baseTmpl,
    
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
  return AccountManageView;
});