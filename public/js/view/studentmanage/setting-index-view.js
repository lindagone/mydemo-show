define([ 'underscore', 'resthub','hbs!template/studentmanage/setting-index','view/studentmanage/addnewinf-view'],
function (_, Resthub,indexTmpl,NewInfView) {
    
    var SettingIndexView = Resthub.View.extend({       
    	//对应的模板
        template: indexTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click #personexp,#family,#advantage':'notShow'
        },
        
       
        //初始化：new View()的时候自动执行，root和collection可以在new View()的时候指定
        initialize:function (options) {
        	//注意bindAll与bind的区别，推荐前者
        	_.bindAll(this, 'render'); 
        	//console.log(options);
        	
        	this.render();
        },
    
        //render视图：data与hbs模板结合
    	render: function() {
    	    var _self=this;
    		this.$el.html(this.template());
    		new NewInfView({root:$('#newbaseinf'),type:'baseinf'});
    			
    		return this;
    	},
    	notShow:function(){
    		alert('请先填写基本信息');
    		return false;
    	}
    	
    	

    });
    return SettingIndexView;
});