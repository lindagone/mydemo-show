define(['underscore', 'backbone', 'resthub', 'und!template/user/role'],
function(_, Backbone, Resthub, roleTmpl){
  var RoleView = Resthub.View.extend({
	//对应的模板
    template: roleTmpl,

    //事件
    events: {
    },

    //初始化
    initialize: function(options) {
    	_.bindAll(this, 'render');
    	
    	//model一旦change，需要重新render，在这里貌似没必要
    	this.model.on('change', this.render, this);
      
    	//render
    	this.render();
    }

  });
  return RoleView;
});
