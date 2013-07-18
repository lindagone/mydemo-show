/**
 * 读信的view
 * 支持转发和回复
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/mail/mail-read', 'jquery-plugin'],
function(_, Backbone, Resthub, readTmpl){
  var ReadMailView = Resthub.View.extend({
    template: readTmpl,
    
    events: {
    	
    },
    
    initialize: function(options) {
    	var _self = this;
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template(options));
		
		return _self;
	}
	
  });
  return ReadMailView;
});