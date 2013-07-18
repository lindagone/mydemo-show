define([ 'underscore', 'resthub', 'und!template/user/roles', 'view/user/role-view',
		'model/role', 'collection/roles' ], function(_, Resthub, rolesTemplate, RoleView, Role, Roles) {

	var RolesView = Resthub.View.extend({

		// 对应的模板
		template : rolesTemplate,
		
		// 事件
		events : {
		},

		// 初始化
		initialize : function(options) {
			_.bindAll(this, 'render');
			
			this.collection = new Roles();

			//定义事件响应方法：参照collection.reset的说明（当collection元素本身的属性变化，不触发reset）
			this.collection.on('reset', this.render, this);
			this.collection.on('modify', this.render, this);
			
			var _self = this;
			this.collection.fetch({ 
				data: { page: options.page|| 'no' }
			}).done(function(result, res){
				console.log('fetched all roles.');
			}).fail(function(result, res){
				console.log(result);
			});
		},

		// render视图
	/*	render : function() {
			this.$el.html(this.template({roles: this.collection.toJSON()}));

			$('#jqueryui-table').dataTable({
				"bJQueryUI" : true
			});

		}*/
		render : function() {
			this.$el.html(this.template({roles: []}));
            console.log(this.collection.toJSON());
			$('#jqueryui-table').dataTable({
				"bJQueryUI" : true,
				"aaData":this.collection.toJSON(),
		    	 "bDeferRender": true,
		    	 "bProcessing":true,
		    	 "sPaginationType" : 'full_numbers',
		    	 "bAutoWidth": true,//自动宽度
		    	//取需要的数据，并作类型更换
			    	"aoColumns": [
				            { "mData": "roleName" },			  
				            { "mData": "subSystemCode"},
				            { "mData": "comments" }
				            ],
				            //语言设置
					        "oLanguage": {
					        	"sLengthMenu": "每页显示 _MENU_条",
					        	"sZeroRecords": "没有找到符合条件的数据",
					        	//"sProcessing": "&lt;img src=’./loading.gif’ /&gt;",
					        	"sInfo": "当前第 _START_ - _END_ 条　共计 _TOTAL_ 条",
					        	"sInfoEmpty": "没有记录",
					        	"sInfoFiltered": "(从 _MAX_ 条记录中过滤)",
					        	"sSearch": "搜索：",
					        	"oPaginate": {
					        	"sFirst": "首页",
					        	"sPrevious": "前一页",
					        	"sNext": "后一页",
					        	"sLast": "尾页"
					        	 }
					        	}
			});
			 //格式化，使查询框和显示条目在一行显示
		    $('#jqueryui-table_filter').addClass('span6');
		    $('#jqueryui-table_length').addClass('span6');
		}
	});
	return RolesView;
});