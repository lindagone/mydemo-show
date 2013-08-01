define([ 'underscore', 'resthub','hbs!template/studentmanage/setstudentInfo','view/studentmanage/setting-index-view','view/studentmanage/modify-view'],
function (_, Resthub,infoTmpl,SettingIndexView,ModifyInfView) {
    
    var StudentInfoView = Resthub.View.extend({       
    	//对应的模板
        template:infoTmpl,
        
        events: {
           'click .goback':'goBack',
           'click .btn-showinf': 'showInf',
          // 'click .changeinf':'modifyInf'
           
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
    		new SettingIndexView({root:$('#addstudentinf')});
    		return this;
    	},
    	goBack:function(){
    		$('.search').show();
    		$('.infdetail').hide();
    		$('#changepersoninf').hide();
    	},
    	showInf:function(){
    		$('.search').hide();
    		$('.infdetail').show();
    		//$('#changepersoninf').hide();
    		new ModifyInfView({root:$('#changepersoninf')});
    	},
    	modifyInf:function(){
    		$('.infdetail').hide();
    		$('.search').hide();
    		$('#changepersoninf').show();  	
    	 
    	}

    });
    return StudentInfoView;        
});