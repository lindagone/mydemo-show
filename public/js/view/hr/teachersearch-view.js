define([ 'underscore', 'resthub','hbs!template/hr/teachersearch'],
function (_, Resthub,searchIndexTmpl) {
    
    var TeacherSearchView = Resthub.View.extend({       
    	//对应的模板
        template: searchIndexTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .btn-sure':"Search",
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
    		 		
    		return this;
    	},
    	Search:function(){
    		$('#results').show();
    	},
    	showDetail:function(){
			alert("显示教师详细信息");
			
		}

    });
    return TeacherSearchView;
});