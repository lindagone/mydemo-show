define([ 'underscore', 'resthub','hbs!template/studentmanage/modify','view/studentmanage/addnewinf-view'],
function (_, Resthub,stuTmpl,NewInfView) {
    
    var ModifyInfView = Resthub.View.extend({       
    	//对应的模板
        template: stuTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .modifyinfor':"modifyInfor",
           'click .modifyinfor1':"modifyInfor1",
           'click .modifyinfor2':"modifyInfor2"
        },
        
       
        //初始化：new View()的时候自动执行，root和collection可以在new View()的时候指定
        initialize:function (options) {
        	//注意bindAll与bind的区别，推荐前者
        	_.bindAll(this, 'render'); 
        	console.log(options);
        	this.render();
        },
       
        //render视图：data与hbs模板结合
    	render: function() {
    	
    		this.$el.html(this.template());
    		new NewInfView({root:$('#changebaseinf')});  	
    		return this;
    	},
    	modifyInfor:function(e){   		
    		$('.init').hide();
    		$('.change').show();
    	
    	},
    	modifyInfor1:function(e){   		
    	$('.init1').hide();
    		$('.change1').show();
    	},
    	modifyInfor2:function(e){   		
    		$('.init2').hide();
    		$('.change2').show();
    	
    	},
    	
    	
    	

    });
    return ModifyInfView;
});