define(['underscore', 'resthub', 'und!template/inqLearn/student/stu-xuantibase'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			
			
		},

		initialize : function(options) {
			var _self = this;
			currentuser=options.currentuser;
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			$(function() {
	          $( '.wy').tooltip({ content:  "教师姓名：王月 <br/>教学科目:语文<br/> 所在年级：高一年级"
	          	}); 
	          	 $( '.sjm').tooltip({ content:  "教师姓名：宋江名 <br/>教学科目:语文<br/> 所在年级：高一年级"
	          	 });               
           });
         
         // if (currentuser=='teacher') {
         	// $('.btn-student').hide();
         	// $('.btn-yxb').hide();
         // }else if(currentuser=='student') {
         	// $('.btn-student').show();
         	// $('.btn-yxb').hide();
         // } else if(currentuser=='yxb') {
         	// $('.btn-student').hide();
         	// $('.btn-yxb').show();
         // }
           
			return _self;
		},
		
		
		
		
		
	});
	return ModuleView;
	
});
