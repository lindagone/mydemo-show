define(['underscore', 'backbone', 'resthub', 'hbs!template/portal/portal-demo'],
function(_, Backbone, Resthub, baseTmpl){
  var MailBaseView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {

    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认获取内部邮箱的数据，并展示
        _self.render();
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
		return _self;
	}
	
  });
  return MailBaseView;
});