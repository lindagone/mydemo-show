define(['underscore', 'resthub', 'und!template/archive/dangan-index','view/archive/dangan-weihu-list-view','view/archive/lanmu-weihu-list-view'], 
function(_, Resthub, template,DAWeiHuListView,LMWeiHuListView) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click #tab1 input[type=radio]':'change',
			'click #myTab li':'changeType',
			'click .btn-search':'gosearch',
			'click .alert input[type=radio]':'changeRole',
			'click .btn-search2':'gotosearch',
			'click #myTab1 li':'changeUserType'
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			this.initTree();
			new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'weiguidang',title:"no"});
			new LMWeiHuListView({root:$('#normalcontent1'),'currentoper':'lanmu'});
			return _self;
		},
		initTree : function() {
			var setting = {
					view : {
						showIcon : true
					},
					callback:{
						//onClick:this.oper
					}
			};
			var zNodes=[
           {name: "学生档案"},{name: "教师档案"}
        
			            ];
			  var zNodes2=[
           {name: "学生档案",open:true,children:[
            {name:'优秀学生'},{name:'普通学生'}
            
           ]}       
			            ];         
			$.fn.zTree.init($("#deptlist"), setting, zNodes);
			$.fn.zTree.init($("#deptlist1"), setting, zNodes2);

		},
		
		change:function(e){
			var s=$(e.target).val();
			if(s=='1'){
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'weiguidang',title:"no"});
			}else if(s=='2'){
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'yiguidang',title:"no"});
			}else if(s=='3'){
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'quanbu',title:"no"});
			}
			
		},
		changeType:function(e){
			var str=$(e.target).closest('li').find('a').text();	
					
			if(str.indexOf('类型')>-1){
				this.change(e);
			}else if(str.indexOf('栏目')>-1){			
				new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'quanbu',title:"stu"});
			}else if(str.indexOf('搜索')>-1){
				$('#normalcontent').html('<h4 class="inCenter">请先在左侧输入查询条件</h4>');
			}
		},
		gosearch:function(){
			new DAWeiHuListView({root:$('#normalcontent'),'currentstatus':'quanbu',title:"no"});
		},
		changeRole:function(e){
			var str=$(e.target).val();
			if(str=='gly'){
				$('#admin').show();
				$('#fuzeren').hide();
			}else if(str=='fzr'){
				$('#admin').hide();
				$('#fuzeren').show();
			}else if(str=='scr'){
				$('#admin').hide();
				$('#fuzeren').show();
			}
		},
		gotosearch:function(){
			new LMWeiHuListView({root:$('#normalcontent1'),'currentoper':'search'});
		},
		changeUserType:function(e){
			var str=$(e.target).closest('li').find('a').text();	
						
			 if(str.indexOf('栏目')>-1){			
				new LMWeiHuListView({root:$('#normalcontent1'),'currentoper':'lanmu'});
			}else if(str.indexOf('搜索')>-1){
				$('#normalcontent1').html('<h4 class="inCenter">请先在左侧输入查询条件</h4>');
			}
		}
	});
	return ModuleView;
}); 