define(['underscore', 'resthub', 'und!template/inqLearn/student/kaitidetail','view/inqLearn/student/stu-xuantibase-view'], 
function(_, Resthub, template,xuantiBaseView) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click .btn-cancle':'cancle',
			'click div input[type=radio]':'changeUser'
			
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
           setTimeout(function(){
         	$('[data-toggle="popover"]').popover({
         	html:true,
         	title:'选择类型：',
           	content:$('#activitytype').html(),
           	
           });
         },0);
           if (currentuser=='teacher') {
         	$('.btn-student').hide();
         	$('#teacherview').show();
         	$('#studentview').hide();
         	$('#teachat').show();
         	$('#stuchat').hide();
         }else {
         	$('#teacherview').hide();
         	$('#studentview').show();
         }
			return _self;
		},
		cancle:function(){
			$('.addactivity').popover('hide')
		},
		changeUser:function(e){
			var str=$(e.target).val();
			if(str=='1'){
				$('.bianji').show();
				$('.btn-student').hide();
				$('.addactivity').show();
				$('.btn-shanchu').show();
			}else  if(str=='2'){
				$('.btn-student').show();
				$('.bianji').hide();
				$('.addactivity').hide();
				$('.btn-shanchu').hide();
			}else  if(str=='3'){
				$('.btn-student').hide();
				$('.bianji').hide();
				$('.addactivity').hide();
				$('.btn-shanchu').hide();
			
			}else  if(str=='4'){
				$('.btn-student').hide();
				$('.bianji').hide();
				$('.addactivity').show();
				$('.btn-shanchu').hide();
				$('.btn-shanchu:eq(2)').show();
				$('.btn-own').show();
			}else  if(str=='5'){
				$('.btn-student').hide();
				$('.bianji').show();
				$('.addactivity').show();
				$('.btn-shanchu').show();
			}
			
			
		}
		
		
		
		
	});
	return ModuleView;
	
});
