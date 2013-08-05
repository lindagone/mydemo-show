define([ 'underscore', 'resthub','hbs!template/studentmanage/improve-inf'],
function (_, Resthub,infoTmpl) {
    
    var ImproveInfoView = Resthub.View.extend({       
    	//对应的模板
        template:infoTmpl,
        
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
    return ImproveInfoView;        
});