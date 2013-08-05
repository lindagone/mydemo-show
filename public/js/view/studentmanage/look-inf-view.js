define([ 'underscore', 'resthub','hbs!template/studentmanage/look-inf'],
function (_, Resthub,Tmpl) {
    
    var LookInfView = Resthub.View.extend({       
    	//对应的模板
        template: Tmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .btn-detail,a.stu ':'showInf',
           'click .btn-showinf':'showResult',
           'click .btn-back':'beBack'
          
        },
        
       
        //初始化：new View()的时候自动执行，root和collection可以在new View()的时候指定
        initialize:function () {
        	//注意bindAll与bind的区别，推荐前者
        	_.bindAll(this, 'render'); 
        	this.render();
        },
    
        //render视图：data与hbs模板结合
    	render: function() {
    	
    		this.$el.html(this.template());
    		this.initTree();
    		return this;
    	},initTree : function() {
			var setting = {
					view : {
						showIcon : true
					},
					callback:{
						onClick:this.oper
					}
			};
			var zNodes=[
           {name: "高中2015届[高一]",open:true, children: [
                  		{name: "高一1班(20)"},
                  		{name: "高一2班(30)"},
                  		{name: "高一3班(21)"},
                  		{name: "未分班的学生(2)"}
                  	]},
			  {name: "高中2014届[高二]", children: [
                  		{name: "高二1班(20)"},
                  		{name: "高二2班(30)"},
                  		{name: "高二3班(21)"},
                  		{name: "未分班的学生(2)"}
                  	]},
			    {name: "高中2013届[高三]", children: [
                  		{name: "高三1班(20)"},
                  		{name: "高三2班(30)"},                 	
                  		{name: "未分班的学生(2)"}
                  	]},
			            ];
			var zTreeObj = $.fn.zTree.init($("#deptlist"), setting, zNodes);

		},
		oper:function(e,treeId,treenode){
			$("#deptlist").find("a").attr("data-bypass",true);
			console.log(treenode.name.indexOf('未分班')==-1)
			if(treenode.level==0){
				$('#gradeinf').show();
				$('#classinf').hide();
				$('#noclazz').hide();
				$('#grade').html(treenode.name.substring(0,7));
			}else if((treenode.level==1)&&!!(treenode.name.indexOf('未分班')==-1)){
				$('#gradeinf').hide();
				$('#classinf').show();
				$('#noclazz').hide();
				$('#clazz').html(treenode.name.substring(0,4));
			}else if((treenode.level==1)&&!(treenode.name.indexOf('未分班')==-1)){
				$('#gradeinf').hide();
				$('#classinf').hide();
				$('#noclazz').show();
			}
		},
		
		showInf:function(){
			alert('显示学生的详细信息，包括基本信息，简历，爱好等');
		},
    	showResult:function(){
			$('.search').hide();
			$('.resultlist').show();
		},
    	beBack:function(){
			$('.resultlist').hide();
			$('.search').show();
		},

    });
    return LookInfView;
});