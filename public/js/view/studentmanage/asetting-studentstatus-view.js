define([ 'underscore', 'resthub','hbs!template/stumanage/setting-studentstatus'],
function (_, Resthub,searchIndexTmpl) {
    
    var TeacherSettingView = Resthub.View.extend({       
    	//对应的模板
        template: searchIndexTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .selectall':"SelectAll",
           'click .unselectall':"unSelectAll",
           'click .currentstatus':"toggleStatus",
           'click #lTree li a':'getstuInf'
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
    	},
    	toggleStatus:function(){   	
    	 if($('.currentstatus').text()=='开放'){   		
    		 $('.currentstatus').text('关闭');
    		 $('#status').text('开放');
    	 }else{    		
    		 $('.currentstatus').text('开放');
    		 $('#status').text('关闭');
    	 }
    	},
    	getstuInf:function(e){  	
    		var et=$(e.target).text();			
    		$("#stutitle").text(et);
    		if(et.contains('已毕业')){
    			$('.shortmessage').hide();
    		}else{
    			$('.shortmessage').show();
    		}
    	}

    });
    return TeacherSettingView;
});