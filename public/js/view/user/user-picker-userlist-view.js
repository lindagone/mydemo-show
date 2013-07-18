define([ 'underscore', 'backbone', 'resthub'], 
		function(_, Backbone, Resthub) {
	var UserPickerListView = Resthub.View.extend({
		// 对应的模板
		template : null,
		
		// 回调函数
		cb : null,
		
		// 事件
		events : {
			'click .users-lists-item' : 'selectUser',
		},

		initialize : function(options) {
			_.bindAll(this, 'render');
			
			if (!options){
				console.log('调用方法错误，需要传入正确的参数');
				options = {};
			}
			
			if (options.cb) {
				this.cb = options.cb;
			}
		
			// 如果存在appHosts.UC，则使用该值作为脚本所在
			var host = '/';
			if (window.appHosts && window.appHosts.UC) {
				host = window.appHosts.UC;
			}
			
			// 加载template, View，加载完毕之后render画面
			var _self = this;
			require([ 'und!' + host + 'template/user/user-picker-userlist', host + 'js/collection/users.js' ], 
					function(template, Users) {
				_self.template = template;
				_self.collection = new Users();
				
				// 如果传入参数有组织id，则根据组织id查询用户
				if (!!options.organizationId) {
					_self.collection.fetch({data:{organization:options.organizationId}}).done(function(result, res){
						options = _.extend(options, {users: result});
						_self.render(options);
					}).fail(function(result, res){
						_self.render(options);
						
					});
				} else {
					_self.render(options);
				}
			});
		},

		render : function(options) {
			if (!options.users) {
				options = _.extend(options, {users:[]});
			}
			
			this.$el.html(this.template(options));
		},
		
		selectUser : function(e) {
			var uId = $(e.target).parent().parent().attr('data-user-id');
			var user = this.collection.get(uId);
			
			if (this.cb) {
				this.cb(user);
			}
		}
		
	});
	return UserPickerListView;
});
