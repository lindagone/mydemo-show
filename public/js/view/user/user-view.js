define(['underscore', 'backbone', 'resthub', 'und!template/user/user'],
function(_, Backbone, Resthub, userTmpl){
  var UserView = Resthub.View.extend({
	//对应的模板
    template: userTmpl,

    //事件
    events: {
    },

    //初始化
    initialize: function(options) {
    	_.bindAll(this, 'render');
    	
    	//render
    	this.render(options);
    },
    
    render: function(options) {
    	console.log(options);
    	this.$el.html(this.template(options));
    }

  });
  return UserView;
});
