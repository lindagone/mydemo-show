define([ 'underscore', 'resthub', 'und!template/user/organizations', 'model/organization', 'collection/organizations' ], 
		function(_, Resthub, organizationsTemplate, Organization, Organizations) {

	var OrganizationsView = Resthub.View.extend({

		// 对应的模板
		template : organizationsTemplate,
		
		// 事件
		events : {
		},

		/**
		 * 初始化View
		 */
		initialize : function(options) {
			_.bindAll(this, 'render');
			this.collection = new Organizations();

			var _self = this;
			this.collection.fetch({
				data: { root:true}, //查询根级别的机构
			}).done(function(result, res){
				_self.render();
			}).fail(function(result, res){
				console.log(result);
			});
		},
		
		render : function() {
			this.$el.html(this.template({organizations: this.collection.toJSON()}));
		}
		
	});
	return OrganizationsView;
});