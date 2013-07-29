define([ 'underscore', 'resthub','hbs!template/hr/setTeacherInfo','view/hr/improve-basicinf-view'],
function (_, Resthub,functionroleTmpl,TeacherView) {
    
    var InfoView = Resthub.View.extend({       
    	//对应的模板
        template: functionroleTmpl,
        
        events: {
           'click .uploader-teachers, .uploader-pics' : 'alertInfo',
           'click #teacherList li' : 'showTeacherInfo',
           'click .deleteTeacher' : 'deleteTeacher',
    	   'click .addTeacher' : 'addTeacher',
    	   'click .openEditInfo' : 'openEditInfo',
    	   'click .saveEditInfo' : 'saveEditInfo'
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
    	
    	alertInfo : function(){
    	    alert("请注意：此处使用全局的导入，参考200上的实现！");
    	},
    	
    	showTeacherInfo : function(e){
    		var _name = $(e.target).closest("span").text();
    		$("#teacherInfoContainer").hide();
    		$("#showTeacherInfo").show();
    		$("span.thisTeacher").html(_name);
    	},
    	
    	deleteTeacher : function(){
    		alert("只能在教师录入重复，或者教师录入错误时，才能删除教师。若该教师离职、退休、死亡等，请去‘教师离退休管理’系统中删除。");
    	},
    	
    	addTeacher : function(){
    		$("#teacherInfoContainer").show();
    		$("#showTeacherInfo").hide();
    	},
    	
    	openEditInfo : function(){
    	    $("#doEdit").show();
            $("#myInfo").hide();
    	},
    	
    	saveEditInfo : function(){
    	    $("#myInfo").show();
            $("#doEdit").hide();   
    	}

    });
    return InfoView;
});