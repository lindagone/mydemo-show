define(['underscore', 'resthub', 'und!template/studentmanage/look-enrollment'], 
function(_, Resthub, template) {
	var EnrollmentLookView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click #inorout':"zhuanxue",
			'click .jiangtiao':'changeType',
			'click .zhuanru':'zhuanRu'
			
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
		changeType:function(){
			var t=$('.jiangtiao').find("option:selected").val();
			if(t=='T'){
				$('#jiangtiao tbody tr:eq(1)').show();
			$('#jiangtiao tbody tr:eq(0)').hide();
			}else if(t=='J'){
				$('#jiangtiao tbody tr:eq(0)').show();
			$('#jiangtiao tbody tr:eq(1)').hide();
			}
		},
		zhuanxue:function(){
	    	 var a=$('#inorout').find("option:selected").val();
	    	 if (a==0) {	    	 	
	    	 	$('#goouters').hide();
	    	 	$('#goinners').show();
	    	 }else{	    	 
	    	 	$('#goouters').show();
	    	 	$('#goinners').hide();
	    	 };
	    	},
		zhuanRu:function(){
		  alert('跳转到学籍异动维护的退学模块');	
		}
	});
	return EnrollmentLookView;
}); 