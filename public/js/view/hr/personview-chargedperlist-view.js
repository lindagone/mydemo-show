define([ 'underscore', 'resthub','hbs!template/hr/personview-chargedperlist'],
function (_, Resthub,personchargeTmpl) {
    
    var PersonChargedView = Resthub.View.extend({       
    	//对应的模板
        template: personchargeTmpl,
        
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
    		
    		return this;
    	},
		showDetail:function(){
			alert("显示教师详细信息");
			
		}
    	

    });
    return PersonChargedView;
});