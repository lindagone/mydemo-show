define([ 'underscore', 'resthub','hbs!template/hr/hr-index','view/hr/hr-deptmanage-view','view/hr/hr-deptfunction-view','view/hr/hr-functionrole-view','view/hr/hr-deptteacher-view','view/hr/hr-teacheradjust-view','view/hr/hr-personrole-view'],
function (_, Resthub,hrIndexTmpl,DeptManageView,DeptFunctionView,FunctionRoleView,DeptTeacherView,TeacherAjustView,PersonRoleView) {
    
    var HrIndexView = Resthub.View.extend({       
    	//对应的模板
        template: hrIndexTmpl,
        
        //事件：编辑book和删除book
        events: {
           
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
    		new DeptManageView({root:$('#deptmanage')});
    		new DeptFunctionView({root:$('#deptfunction')});
    		new FunctionRoleView({root:$('#functionrole')});
    		new DeptTeacherView({root:$('#dept-teacher')});
    		new TeacherAjustView({root:$('#teacheradjust')});
    		new PersonRoleView({root:$('#personrole')});
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
			var zTreeObj = $.fn.zTree.init($("#deptlist"), setting, zNodes);

		},
		oper:function(e,treeId,treenode){
			$("#deptlist").find("a").attr("data-bypass",true);
			if(treenode.name=='杨凌'){
				$('#teacheradjust').focus();				
				$("div h4").html(treenode.name+"现在的部门情况 ");
				var str="<table class='table'><tr><th>教师姓名</th><th>原部门</th><th>去向部门</th><th>调入日期</th><th>职务名称</th><th>职务类型</th><th>功能</th></tr>"
					+"<tr><td>"+treenode.name+"</td><td>政治教研组</td><td>"+
					"<select class='input-small'><option>语文教研组</option><option>数学教研组</option><option>物理教研组</option></select>"
					
					+"</td><td><input type=\"text\" value='2012-03-23' class='input-small'/></td><td><input type=\"text\" class='input-small' value=\"\"/></td><td>"
					+"<select class='input-small'><option>教师</option><option>主任</option><option>职员</option></select>"
					+"</td><td><button type='button' class='btn'>确定</button></td></tr></table>";
                $("#myTabContent2").replaceWith($("#teacheradjust"));
				$("#teacheradjust").replaceWith(str);
			}else{
				$("div h4 span").html(treenode.name);
			}
			
			
			
		}
    	

    });
    return HrIndexView;
});