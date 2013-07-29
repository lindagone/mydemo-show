define([ 'underscore', 'resthub','hbs!template/hr/setting-teacherstatus'],
function (_, Resthub,searchIndexTmpl) {
    
    var TeacherSettingView = Resthub.View.extend({       
    	//对应的模板
        template: searchIndexTmpl,
        
        //事件：编辑book和删除book
        events: {
           'click .selectall':"selectAllEdit",
           'click .selfseeall':"selectSelfSee",
           'click .otherseeall':"selectOtherSee",
           
           'click .teacherSetting':'notSelectAllEdit',
           'click .selfsee':'notSelectAllSelf',
           'click .othersee':'notSelectAllOther',
           
           'click button.status-open, button.status-close':"openToClose"
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
    	
    	selectAllEdit:function(e){
    	    if($(e.target).is(':checked')){
    	        $("input.teacherSetting").each(function(){               
                    $(this).prop('checked', true);           
                });
    	    }else{
    	        $("input.teacherSetting").each(function(){               
                    $(this).prop('checked',false);           
                });
    	    }    		
    	},
    	
    	selectSelfSee : function(e){
    	    if($(e.target).is(':checked')){
                $("input.selfsee").each(function(){               
                    $(this).prop('checked', true);           
                });
            }else{
                $("input.selfsee").each(function(){               
                    $(this).prop('checked',false);           
                });
            }  
    	},
    	
    	selectOtherSee : function(e){
            if($(e.target).is(':checked')){
                $("input.othersee").each(function(){               
                    $(this).prop('checked', true);           
                });
            }else{
                $("input.othersee").each(function(){               
                    $(this).prop('checked',false);           
                });
            }  
        },
    	
    	notSelectAllEdit : function(e){
    	    if(!$(e.target).is(':checked')){
    	        $('input.selectall').prop('checked',false);
    	    }
    	},
    	
    	notSelectAllSelf : function(e){
            if(!$(e.target).is(':checked')){
                $('input.selfseeall').prop('checked',false);
            }
        },
        
        notSelectAllOther : function(e){
            if(!$(e.target).is(':checked')){
                $('input.otherseeall').prop('checked',false);
            }
        },
    	
    	openToClose : function(){
    	    var _self = this;
    	    var $buttonOpen = _self.$el.find('button.status-open');
    	    var $buttonClose = _self.$el.find('button.status-close');
    	    
    	    //开启到关闭
    	    if($buttonOpen.hasClass('btn-primary')){
    	        $buttonOpen.removeClass('btn-primary')
    	                   .find('span').css('visibility','hidden');
    	        $buttonClose.addClass('btn-primary')
    	                   .find('span').css('visibility','visible');
    	        
    	    //关闭到开启    
    	    }else{
    	        $buttonClose.removeClass('btn-primary')
                           .find('span').css('visibility','hidden');
                $buttonOpen.addClass('btn-primary')
                           .find('span').css('visibility','visible');
    	    }
    	}

    });
    return TeacherSettingView;
});