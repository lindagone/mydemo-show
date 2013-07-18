define([ 'underscore', 'resthub','hbs!template/hr/personview-index','view/hr/personview-dept-view','view/hr/personview-chargedperlist-view','view/hr/personview-servingteacher-view'],
function (_, Resthub,perIndexTmpl,PersonViewDeptView,PersonChargedView,PersonServingView) {
    
    var PersonViewIndexView = Resthub.View.extend({       
    	//对应的模板
        template: perIndexTmpl,
        
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
    		new PersonViewDeptView({root:$('#employeelist')}); 
    		new PersonChargedView({root:$('#chargedperlist')});
    		new PersonServingView({root:$('#servingteacher')});
    		return this;
    	}

    });
    return PersonViewIndexView;
});