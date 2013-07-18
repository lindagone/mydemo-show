define([ 'underscore', 'resthub', 'und!template/user/users', 'view/user/user-view',
		'model/user', 'collection/users', 'collection/roles' ], function(_, Resthub, usersTemplate, UserView, User, Users, Roles) {

	var UsersView = Resthub.View.extend({

		// 对应的模板
		template : usersTemplate,
		
		// 当前编辑的用户
		editingUser : null,
		
		// 事件
		events : {
			'click .users-management .btn-user-add' 	: 'addUser', 	// 添加用户
			'click .users-management .btn-user-edit'	: 'editUser', 	// 修改用户
			'click .users-management .btn-user-delete'	: 'deleteUser', // 删除用户
			'click .users-management .btn-user-restore'	: 'restoreUser',// 恢复删除用户
			'click .users-management .btn-user-lock'	: 'lockUser', 	// 锁定用户
			'click .users-management .btn-user-unlock'	: 'unlockUser',	// 解锁用户
			'click .users-management .btn-user-cmt-fbd'	: 'fbdComment', // 禁止评论
			'click .users-management .btn-user-cmt-rel'	: 'relComment', // 解禁评论
			'click .users-management .btn-user-ntc-fbd'	: 'fbdNotice', // 禁发通知
			'click .users-management .btn-user-ntc-rel'	: 'relNotice', // 解禁通知
			'click .form-actions .btn-user-save' 		: 'saveUser', 	// 保存用户
			'click .form-actions .btn-user-cancel' 		: 'showUsers', 	// 返回列表画面
		//	'click .dataTables_paginate a'				: 'toPage' 		// 处理分页
		},

		/**
		 * 初始化View
		 */
		initialize : function(options) {
			_.bindAll(this, 'render');
			this.collection = new Users();

			var _self = this;
			this.collection.fetch({
				data: { page: options.page|| 'no'},
			}).done(function(result, res){
				_self.render();
			}).fail(function(result, res){
				console.log(result);
			});
		},

		/**
		 * 渲染页面
		 */
		/*render : function() {
			this.$el.html(this.template({users: this.collection.toJSON()}));//[0].content}));

			$('#jqueryui-table').dataTable({
				"bJQueryUI" : true,
				"sPaginationType" : 'full_numbers'//"full_numbers"
			});

		},*/
		
		render : function() {
		
		
			this.$el.html(this.template({users:[]}));//[0].content}));
		    $('#example').dataTable( {
		    	"bJQueryUI" : true,		   
		    	"aaData":this.collection.toJSON(),
		    	 "bDeferRender": true,
		    	 "bProcessing":true,
		    	// "sPaginationType" : 'full_numbers',		    		    	
		    	 //取需要的数据，并作类型更换
		    	"aoColumns": [
			            { "mData": "username" },			  
			            { "mData": "fullname" },
			            { "mData": "gender",
			            	
			            "mRender":function( data, type, full){
			         //
			            	  var sReturn=full.gender;
			            	  if ( sReturn == 0 ) {
		                          sReturn = "女";
		                      }else if( sReturn == 1 ){
		                    	  sReturn = "男";
		                      }else {
		                    	  sReturn = "不详";
		                      }
			            	// (sReturn == 0)?"女":"男";
		                      return sReturn;
			            	  
			            }
			            },
			            { "mData": "uniqueNo" },
			            { "mData": "email" },
			            { "mData": "category" ,
			            
			            	 "mRender":function( data, type, full){			            		 
			            		 var cReturn = full.category;
			            		 switch(cReturn){
			            		 case 0: 
			            			 cReturn = "学生";break;
			            		 case 1:
			            			 cReturn = "教师";break;
			            		 case 3:
			            			 cReturn = "家长";break;
			            		 case 5:
			            			 cReturn = "管理员";break;
			            		 case 9:
			            			 cReturn = "其他";break;
			            		 }
			                    
			                      return cReturn;
			            	 }
			            
			            },
			            { "mData": function(){
			            	return '<a data-bypass href="#" class="btn btn-user-edit"><i class="icon-edit"></i>修改</a>';
			            } },
			            //自定义列，根据条件显示不同的按钮
			            { 
			            	"mData": function(obj){
			            	var active=null;
			            	var lock=null;
			            	var remark=null;
			            	var notice=null;
			            	//console.log(obj);
			            	if (obj.active){
			            		 active= '<a data-bypass href="#" class="btn btn-user-delete"><i class="icon-trash"></i>删除</a>';
			            	}else {
			            		 active ='<a data-bypass href="#" class="btn btn-user-restore"><i class="icon-ok-circle"></i>恢复</a>';
			            	}
			            	//console.log(obj.locked);
			            	if(obj.locked){
			            		lock= '<a data-bypass href="#" class="btn btn-user-unlock"><i class="icon-unlock"></i>解锁</a>';
			            	}else{
			            		lock= '<a data-bypass href="#" class="btn btn-user-lock"><i class="icon-lock"></i>锁定</a>';
			            	}
			            	if (obj.settings && obj.settings.noCmt){
			            		remark='<a data-bypass href="#" class="btn btn-user-cmt-rel"><i class="icon-volume-up"></i>解禁评论</a>';
			            	}else{
			            		remark='<a data-bypass href="#" class="btn btn-user-cmt-fbd"><i class="icon-minus-sign"></i>禁止评论</a>';
			            	}
			            	if (obj.settings && obj.settings.noNtc){
			            		notice='<a data-bypass href="#" class="btn btn-user-ntc-rel"><i class="icon-volume-up"></i>解禁通知</a>';
			            	}else{
			            		notice='<a data-bypass href="#" class="btn btn-user-ntc-fbd"><i class="icon-minus-sign"></i>禁发通知</a>';
			            	}
			            	return active+" "+lock+''+remark+notice;
			            } },
			        ],
			        //为tr添加data-user-id属性
			        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
			           
			           var id = aData.id;
			            $(nRow).attr("data-user-id",id);			        	
			        	
			           return nRow;
			        },
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
			        
			    } );  
		    //格式化，使查询框和显示条目在一行显示
		    $('#example_filter').addClass('span6');
		    $('#example_length').addClass('span6');
		    $('#example_paginate').find('a').attr('data-bypass','data-bypass');

		},
		
		/**
		 * 手工处理分页？？
		 */
		toPage : function(e) {
			//TODO:处理分页
			console.log(e.target);
			console.log($('.dataTables_paginate a').size());
			
		},

		/**
		 * 点击增加按钮时，显示空的用户详细/编辑页面
		 */
		addUser : function() {
			this.editingUser = new User();
			this.editingUser.collection = this.collection;
			
			this.showUser();
		},
		
		/**
		 * 点击修改按钮时，显示当前用户的详细/编辑页面
		 */
		editUser : function(e) {
			
			var uId = $(e.target).closest('tr').data('user-id');
    		this.editingUser = this.collection.get(uId);   		
    		this.showUser();
		},

		/**
		 * 点击保存按钮时，保存新增/修改的用户信息（包括角色设定）
		 */
		saveUser : function() {
			this.assembleData(this.editingUser);
			
			this.saveAndRefresh();

		},
		
		/**
		 * 保存当前编辑用户并刷新列表页面
		 */
		saveAndRefresh : function() {
			var _self = this;
			_.debounce(this.editingUser.save().done(function(model, res){
console.log('user saved');
				 //新增加时需要将其加入到collection，修改时add会被自动忽略
				_self.collection.add(model);
				_self.render();//TODO：以后需要单独render editingUser对应的行
			}).fail(function(model, xhr){
				console.log(xhr);
			}),500,true);
		},
		
		/**
		 * 删除用户的设定
		 */
		deleteUser : function(e) {
			var options = {active:false};
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		this.editingUser.set(options);
    		
    		this.saveAndRefresh();
		},
		
		/**
		 * 回复删除用户的设定
		 */
		restoreUser : function(e) {
			var options = {active:true};
			var uId = $(e.target).closest('tr').data('user-id');
		//	var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		this.editingUser.set(options);
    		
    		this.saveAndRefresh();
		},
		
		/**
		 * 锁定用户的设定
		 */
		lockUser : function(e) {
			var options = {locked:true};
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		this.editingUser.set(options);
    		
    		this.saveAndRefresh();
		},
		
		/**
		 * 解锁用户的设定
		 */
		unlockUser : function(e) {
			var options = {locked:false};
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		this.editingUser.set(options);
    		
    		this.saveAndRefresh();
		},
		
		/**
		 * 禁言的设定
		 */
		fbdComment : function(e) {
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		
    		if (!!this.editingUser.get('settings')) {
    			var settings = this.editingUser.get('settings');
    			settings.noCmt = true;
    		} else {
    			var settings = {noCmt:true};
    			this.editingUser.set({settings:settings});
    		}

    		this.saveAndRefresh();
		},
		
		/**
		 * 解除禁言的设定
		 */
		relComment : function(e) {
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		
    		var settings = this.editingUser.get('settings');
			settings.noCmt = false;
			
			this.saveAndRefresh();
		},
		
		/**
		 * 禁止通知的设定
		 */
		fbdNotice : function(e) {
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		
    		if (!!this.editingUser.get('settings')) {
    			var settings = this.editingUser.get('settings');
    			settings.noNtc = true;
    		} else {
    			var settings = {noNtc:true};
    			this.editingUser.set({settings:settings});
    		}

    		this.saveAndRefresh();
		},
		
		/**
		 * 解除禁止通知的设定
		 */
		relNotice : function(e) {
			var uId = $(e.target).closest('tr').data('user-id');
			//var uId = $(e.target).parent().parent().attr('data-user-id');
    		this.editingUser = this.collection.get(uId);
    		
    		var settings = this.editingUser.get('settings');
			settings.noNtc = false;
			
			this.saveAndRefresh();
		},
		
		/**
		 * 点击保存时，从用户编辑表单装配数据
		 */
		assembleData: function(user) {
			var formData = this.$('form').serializeObject();
			// 验证：TODO
			
			// 填充数据
			var roleIds = _.isArray(formData.roles) ? formData.roles : new Array(formData.roles);
			var roles = new Array();
			_.each(roleIds, function(v, idx) {
				var role = {};
				role.id = v;
				
				roles[idx] = role;
			});
			
			user.set({
				username: 	formData.username,
				uniqueNo: 	formData.uniqueNo,
				fullname:	formData.fullname,
				gender: 	formData.gender,
				email:		formData.email,
				category:	formData.category,
				roles:		roles
			});
		},

		/**
		 * 显示用户列表页面，隐藏用户详细/编辑页面
		 * （点击保存，取消的时候）
		 */
		showUsers : function() {
			$('#user_container').html('');
			$('#users_container').show();
		},
		
		/**
		 * 显示用户详细/编辑页面，隐藏列表页面。
		 * （当点击新增，编辑的时候）
		 */
		showUser : function() {
			
			var roleOptions = new Roles();
			
			var _self = this;
			//console.log(_self);
			roleOptions.fetch({
				data: { page: 'no'}
			}).done(function(result, res){
				var userView = new UserView({
					model : _self.editingUser.toJSON(),
					roleOptions : roleOptions.toJSON()
				});
				$('#users_container').hide();
				$('#user_container').html(userView.el);
			}).fail(function(result, res){
				console.log(result);
			});
		}
		
	});
	return UsersView;
});