define([ 'underscore', 'resthub','hbs!template/hr/improve-teacherinf','view/hr/improve-basicinf-view','view/hr/improve-relationship-view','view/hr/improve-resume-view','view/hr/improve-hobby-view'],
function (_, Resthub,infIndexTmpl,ImproveBasicInfView, ImproveRelationView,ImproveResumeView,ImproveHobbyView) {
    
    var TeaInfImproveView = Resthub.View.extend({       
    	//对应的模板
        template: infIndexTmpl,
       
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
    		 new ImproveBasicInfView({root:$("#baseinf")});	
    		 new ImproveRelationView({root:$("#relationship")});
    		 new ImproveResumeView({root:$("#resume")});
    		 new ImproveHobbyView ({root:$("#hobby")});
    		return this;
    	}
    	

    });
    return TeaInfImproveView;
});