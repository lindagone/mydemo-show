define([ 'underscore', 'resthub','hbs!template/hr/hr-functionrole'],
function (_, Resthub,functionroleTmpl) {
    
    var FunctionRoleView = Resthub.View.extend({       
    	//对应的模板
        template: functionroleTmpl,
        
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
    		
    		return this;
    	}
    	
    	

    });
    return FunctionRoleView;
});