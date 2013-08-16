define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/jietishenhe'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentpos:null,
		events : {
			'click .btn-agree':'agree',
			'click .btn-cancle':'cancle',
			'click .xuefen':'editxuefen'
			
		},

		initialize : function(options) {
			var _self = this;
			currentpos=options.currentpos;
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
           
           if (currentpos=='shenhe') {
           	$('#myTab li:eq(0)').removeClass('active');
				$('#tab1').removeClass('active');
				$('#myTab li:eq(1)').addClass('active');
				$('#tab2').addClass('active');
           };
			return _self;
		},
		cancle:function(){
			$('.addactivity').popover('hide')
		},
		agree:function(){
			
			if(!alert('请认定该课题的学分！')){
				$('#myTab li:eq(0)').removeClass('active');
				$('#tab1').removeClass('active');
				$('#myTab li:eq(1)').addClass('active');
				$('#tab2').addClass('active');
			}
		},
		editxuefen:function(){
			var y=$('#xuefen').html();
			var s=prompt("请输入该课题的学分",y);
			
			if(s==null||s==''){
				$('#xuefen').html(y);
			}else{
				$('#xuefen').html(s);
			}
			
		}
		
		
		
		
	});
	return ModuleView;
	
});
