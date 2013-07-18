define([ 'underscore', 'resthub','hbs!template/hr/setting-teacherstatus'],
function (_, Resthub,searchIndexTmpl) {
    
    var TeacherSettingView = Resthub.View.extend({       
    	//对应的模板
        template: searchIndexTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .selectall':"SelectAll",
           'click .unselectall':"unSelectAll"
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
    	SelectAll:function(){
    		
    		$("input:checkbox").each(function(){    			
    			$(this).prop('checked',true);  			
    		});
    		//$("tbody tr td").find('input').attr('checked',true);
    	},
    	unSelectAll:function(){
    		$("input:checkbox").each(function(){
    			if($(this).is(':checked')){   				
    				$(this).removeAttr('checked');   				
    			}else{
    				$(this).prop('checked',true);
    			}
    		});
    		
    		
    		
    	}

    });
    return TeacherSettingView;
});