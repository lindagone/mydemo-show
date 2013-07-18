/**
 * 用户单选页面，可供其他子系统使用。
 * 
 * 需要使用本页面的子系统，需要做如下配置：
 * 1. 在子系统的合适位置（index.html或main.js）添加下面的全局常量：
 * 	window.appHosts = {
 *			UC	:	'http://localhost:8080/', //用户中心APP Server,别忘了最后的‘/’
 *	};
 * 2. 在main.js的require.config部分添加下面的path定义：
 * 	'user-picker-single': window.appHosts.UC + 'js/view/user/user-picker-single-view'
 * 3. 在需要显示本页面的View的头部添加如下引用：
 * 	define([ 'underscore', ..., 'user-picker-single' ],
 * 		function (_, ..., UserPickerView) {
 * 4. 在代码需要的位置如下使用：
 * 	var userpickerView = new UserPickerView();
 *  $("#userPicker").html(userpickerView.el);
 *  $("#userPicker").modal();
 */
define([ 'underscore', 'backbone', 'resthub'], 
		function(_, Backbone, Resthub) {
	var UserPickerSingleView = Resthub.View.extend({
		// 对应的模板
		template : null,
		OrganizationsView: null,
		UserListView:null,
		
		// 回调
		cb:null,
		
		// 事件
		events : {
		},

		initialize : function(options) {
			_.bindAll(this, 'render');
			
			if (!!options && !!options.cb) {
				this.cb = options.cb;
			}
		
			// 如果存在appHosts.UC，则使用该值作为脚本所在
			var host = '/';
			if (window.appHosts && window.appHosts.UC) {
				host = window.appHosts.UC;
			}
			
			// 加载template, View，加载完毕之后render画面
			var _self = this;
			require([ 'und!' + host + 'template/user/user-picker-single', 
			          host + 'js/view/user/user-picker-organizations-view.js', 
			          host + 'js/view/user/user-picker-userlist-view.js'], 
					function(template, OrganizationsView, UserListView) {
				_self.template = template;
				_self.OrganizationsView = OrganizationsView;
				_self.UserListView = UserListView;
				_self.render();
			});
		},

		render : function() {
			this.$el.html(this.template());
			
			var OrganizationsView = this.OrganizationsView;
			var UserListView = this.UserListView;
			
			new OrganizationsView({root:$('#organizationlist'), parent:this});
			
			var options = {root:$('#userlist'), parent:this};
			if (!!this.cb) {
				options = _.extend(options, {cb:this.cb});
			}
			new UserListView(options);
		},
		
		showUsers:function(orgId) {
			var UserListView = this.UserListView;
			
			var options = {root:$('#userlist'), parent:this, organizationId:orgId};
			if (!!this.cb) {
				options = _.extend(options, {cb:this.cb});
			}
			new UserListView(options);
		}

	});
	return UserPickerSingleView;
});
