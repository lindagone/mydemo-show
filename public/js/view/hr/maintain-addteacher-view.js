define([ 'underscore', 'resthub','hbs!template/hr/maintain-addteacher','view/hr/improve-teacherinf-view','view/hr/improve-basicinf-view'],
function (_, Resthub,otherTmpl,TeaInfImproveView,ImproveBasicInfView) {
    
    var MaintainAddTeacherView = Resthub.View.extend({       
    	//对应的模板
        template: otherTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .btn-addbybatch':"addByBatch",
           'click .btn-additem':'addNewTeacher',
           'click .btn-back':'backToMain'
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
    		new TeaInfImproveView({root:$("#teacherinf")});
    		return this;
    	},
    	addByBatch:function(){
    		 $("#detail").hide();
             $("#addbatch").show();
    	},
    	addNewTeacher:function(){
    	 new ImproveBasicInfView({root:$("#teacherinf")});	
        
    	},
    	backToMain:function(){  	
    		 $("#detail").show();
             $("#addbatch").hide();
    	}

    });
    return MaintainAddTeacherView;
});