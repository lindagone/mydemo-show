define([ 'underscore', 'resthub','hbs!template/hr/hrmanage-index','view/hr/hr-functionrole-view','view/hr/hr-personrole-view'],
function (_, Resthub,hrmanageIndexTmpl,FunctionRoleView,PersonRoleView) {
    
    var HrManageIndexView = Resthub.View.extend({       
    	//对应的模板
        template: hrmanageIndexTmpl,
        
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
    		new FunctionRoleView({root:$('#hrfunctionrole')});
    		new PersonRoleView({root:$('#hrpersonrole')});
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
			var zNodes=[{name:"我的部门",open:true,
                     children: [ {name: "学校"},
                  		{name: "教务处"},             
                  		{name: "平台管理"}
                  		]
			}
			            ];
			var zTreeObj = $.fn.zTree.init($("#deptlist"), setting, zNodes);

		},
		oper:function(e,treeId,treenode){
			$("#deptlist").find("a").attr("data-bypass",true);
			$("div.header h4 span").html(treenode.name);
		
		}
    	

    });
    return HrManageIndexView;
});