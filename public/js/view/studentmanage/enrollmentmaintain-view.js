define(['underscore', 'resthub', 'und!template/studentmanage/enrollmentmaintain'], 
function(_, Resthub, template) {
	var EnrollmentChangeMaintainView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-cancle':'jieduCancle',
			'click .btn-fuxue':'fuxue',
			'click .btn-addgraduate':'addGraduate',
			'click #inorout':"zhuanxue",
			'click .btn-showinf':'showInf',
			'click .btn-notshow':'goSearchPage'
			
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
		   
			return _self;
		},
		jieduCancle:function(e){
			var txt=$(e.target).text();
			var txt2=txt.substring(2);
			if(confirm('确定要撤销这个'+txt2+'学生吗？')){
				window.globalNotify({
					type:'success',
					 htmlContent:txt+"成功！",
                   cb:function(){
                   	$(e.target).closest('tr').hide();
                   }
				});
			}
		},
		fuxue:function(){
			$('#xiufuxue tbody tr:eq(2)').show();
			$('#xiufuxue tbody tr:eq(1)').hide();
		},
		addGraduate:function(){
			$('#biye tbody tr:eq(2)').show();
			$('#biye tbody tr:eq(1)').hide();
		},
	    zhuanxue:function(){
	    	 var a=$('#inorout').find("option:selected").val();
	    	 if (a==0) {
	    	 	$('.btn-addstudent').text('添加转入学生');
	    	 	$('#goouters').hide();
	    	 	$('#goinners').show();
	    	 }else{
	    	 	$('.btn-addstudent').text('添加转出学生');
	    	 	$('#goouters').show();
	    	 	$('#goinners').hide();
	    	 };
	    	},
	    showInf:function(){
	    	$('.stuinf').show();
	    	$('.search').hide();
	    },
	    goSearchPage:function(){
	    	$('.stuinf').hide();
	    	$('.search').show();
	    },
		
	});
	return EnrollmentChangeMaintainView;
}); 