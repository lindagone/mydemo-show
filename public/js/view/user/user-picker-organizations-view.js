define([ 'underscore', 'resthub' ], function(_, Resthub) {

	var OrganizationsView = Resthub.View.extend({

		// 对应的模板
		template : null,
		
		// 父View
		parent: null,

		// 事件
		events : {},

		/**
		 * 初始化View
		 */
		initialize : function(options) {
			this.parent = options.parent;
			
			_.bindAll(this, 'render', 'selectOrganization');
			
			// 如果存在appHosts.UC，则使用该值作为脚本所在
			var host = '/';
			if (window.appHosts && window.appHosts.UC) {
				host = window.appHosts.UC;
			}
			
			// 加载template, View，加载完毕之后render画面
			var _self = this;
			require([ 'und!' + host + 'template/user/user-picker-organizations', 
			          host + 'js/collection/organizations.js'], 
					function(template, Organizations) {
				_self.template = template;
				_self.collection = new Organizations();
				_self.collection.fetch({data:{root:true}}).done(function(result, res){
					_self.render({organizations:result});
				}).fail(function(result, res){
					console.log('加载机构列表失败...');
				});
			});
		},

		render : function(options) {
			this.$el.html(this.template());
			this.initTree(options);
			return this;

		},
		initTree : function(options) {
			var setting = {
				view : {
					showIcon : false
				},
				callback:{
					onClick: this.selectOrganization
					
				}
			};
			
			var zTreeObj = $.fn.zTree.init($("#student-tree"), setting, options.organizations);

		},
		
		selectOrganization: function(event,treeId, treeNode) {
			//a链接添加属性
			$(event.target).closest('a').attr("data-bypass",true);
			this.parent.showUsers(treeNode.id);
		}

	});
	return OrganizationsView;
});