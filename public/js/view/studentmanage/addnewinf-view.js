define([ 'underscore', 'resthub','hbs!template/studentmanage/addnewinf'],
function (_, Resthub,stuTmpl) {
    
    var NewInfView = Resthub.View.extend({       
    	//对应的模板
        template: stuTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .changeinf':'modifyInf'
        },
        
       
        //初始化：new View()的时候自动执行，root和collection可以在new View()的时候指定
        initialize:function (options) {
        	//注意bindAll与bind的区别，推荐前者
        	_.bindAll(this, 'render'); 
        	this.type=options.type;
        	console.log(options);
        	this.render();
        },
    
        //render视图：data与hbs模板结合
    	render: function() {
    	    var _self=this;
    		this.$el.html(this.template());
    		if(_self.type=='baseinf'){
    			$('.beforechange').hide();
    			$('.afterchange').show();
    		}else{
    			
    			$('.afterchange').hide();
    			$('.beforechange').show();
    		}
    		return this;
    	},
    	modifyInf:function(){
    	$('.beforechange').hide();
    	$('.afterchange').show();
    	}
    	
    	

    });
    return NewInfView;
});