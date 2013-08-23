define(['underscore', 'resthub', 'und!template/archive/dangan-look-index','view/archive/dangan-look-detail-view'], 
function(_, Resthub, template,DALookDetailView) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			//'click #myTab li':'changeType',
			'click .btn-search':'gosearch',
			'click .alert input[type=radio]':'changeRole'
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			//new DALookDetailView({root:$('#normalcontent')});
			this.initTree();		
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
           {name: "学生档案(100条)",open:true,children:[
            {name:'优秀学生(10条)'},{name:'普通学生(90条)'}
            
           ]},{name: "教师档案(100条)"}
        
			            ];
			$.fn.zTree.init($("#deptlist"), setting, zNodes);
         $.fn.zTree.init($("#deptlist2"), setting, zNodes);
		},
		changeType:function(e){
			var str=$(e.target).closest('li').find('a').text();	
					
		   if(str.indexOf('栏目')>-1){			
				new DALookDetailView({root:$('#normalcontent')});
			}else if(str.indexOf('搜索')>-1){
				$('#normalcontent').html('<h4 class="inCenter">请先在左侧输入查询条件</h4>');
			}
		},
		gosearch:function(){
			//new DALookDetailView({root:$('#normalcontent'),currentpos:'search'});
			$('.cxh').show();
			$('.cxq').hide();
		},
		changeRole:function(e){
			var str=$(e.target).val();
			if(str=='admin'){
				$('#gaoji').show();
				$('#putong').hide();
			}else if(str=='look'){
				$('#putong').show();
				$('#gaoji').hide();
			}
		},
		
	});
	return ModuleView;
}); 