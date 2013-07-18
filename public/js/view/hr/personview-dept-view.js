define([ 'underscore', 'resthub','hbs!template/hr/personview-dept'],
function (_, Resthub,perDeptTmpl) {
    
    var PersonViewDeptView = Resthub.View.extend({       
    	//对应的模板
        template: perDeptTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .personname':'showDetail'
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
           {name: "学校",open:true, children: [
                  		{name: "教务处",
                  			children:[
                      {name: "语文教研组",
                    	  children:[
                    	     {name:"杨凌"} ]},
                      {name: "数学教研组"},
                      {name: "英语教研组"}                      
                  			          ]},
                  		{name: "信息中心",
                  			children:[
                             {name: "电教室"}]},
                  		{name: "行政处"},
                  		{name: "权限查看部门"},
                  		{name: "学校资产"},
                  		{name: "平台管理"}
                  	]}
			            
			            ];
			var zTreeObj = $.fn.zTree.init($("#deptpersonlist"), setting, zNodes);

		},
		oper:function(e,treeId,treenode){
			$("#deptpersonlist").find("a").attr("data-bypass",true);
			$("div.header h4 span").html(treenode.name);
		
		},
		showDetail:function(){
			alert("显示教师详细信息");
			
		}
    	

    });
    return PersonViewDeptView;
});