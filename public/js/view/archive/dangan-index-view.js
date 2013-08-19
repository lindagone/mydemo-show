define(['underscore', 'resthub', 'und!template/archive/dangan-index','view/archive/dangan-weihu-list-view'], 
function(_, Resthub, template,DAWeiHuListView) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click #tab1 input[type=radio]':'change',
			'click #myTab li':'changeType',
			'click .btn-search':'gosearch'
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			this.initTree();
			new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'weiguidang'});
			return _self;
		},
		initTree : function() {
			var setting = {
					view : {
						showIcon : true
					},
					callback:{
						onClick:this.oper
					}
			};
			var zNodes=[
           {name: "学生档案"},{name: "教师档案"}
        
			            ];
			var zTreeObj = $.fn.zTree.init($("#deptlist"), setting, zNodes);

		},
		
		change:function(e){
			var s=$(e.target).val();
			if(s=='1'){
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'weiguidang'});
			}else{
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'yiguidang'});
			}
			
		},
		changeType:function(e){
			var str=$(e.target).closest('li').find('a').text();	
					
			if(str.indexOf('类型')>-1){
				this.change(e);
			}else if(str.indexOf('栏目')>-1){			
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'quanbu'});
			}else if(str.indexOf('搜索')>-1){
				$('#normalcontent').html('<h4 class="inCenter">请先在左侧输入查询条件</h4>');
			}
		},
		gosearch:function(){
			new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'weiguidang'});
		}
		
	});
	return ModuleView;
}); 