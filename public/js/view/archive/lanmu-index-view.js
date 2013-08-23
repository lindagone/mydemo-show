define(['underscore', 'resthub', 'und!template/archive/lanmu-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			//'click .btn-add':'addrow',
			//'click .btn-xiugai':'modify',
			'click .alert input[type=radio]':'change',
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
		    this.initTree();
			return _self;
		},
		addrow:function(){
			$('tbody tr:eq(0)').show();
			$('tbody tr:eq(1)').show();
			$('tbody tr:eq(2)').hide();
		},
		modify:function(){
			$('tbody tr:eq(2)').show();
			$('tbody tr:eq(0)').hide();
			$('tbody tr:eq(1)').hide();
		},
		initTree : function() {
			var setting = {
					view : {
						showIcon : true,
						//fontCss : {'font-size':"25px"}
					},
					callback:{
						onClick:this.oper
					}
			};
			var zNodes=[
           {name: "学生档案",open:true,children:[
            {name:'优秀学生栏目'},{name:'普通学生栏目'}
            
           ]}
        
			            ];
			var zTreeObj = $.fn.zTree.init($("#deptlist"), setting, zNodes);

		},
		change:function(e){
			var str=$(e.target).val();
			if(str=='1'){
				$('#admin').show();
				$('#fuzeren').hide();
			}else if(str=='2'){
				$('#admin').hide();
				$('#fuzeren').show();
			}
		},
		oper:function(e,treeId,treenode){
			$("#deptpersonlist").find("a").attr("data-bypass",true);
			$("#titlename").html(treenode.name);
		
		},
	});
	return ModuleView;
}); 