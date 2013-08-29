define(['underscore', 'resthub', 'und!template/inqLearn/student/stu-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-asktoadd':'askToAdd',
			'click div input[type=radio]':'changeUser'
			
		},

		initialize : function(options) {
			var _self = this;
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			$("#myketi").hide();
				$(".myketi").hide();
			return _self;
		},
		askToAdd:function(){
			
			$('#addstatus-message').dialog({
		      autoOpen: false,
		      minWidth:600,
		      minHeight:200,
		      modal: true,
		      buttons: {
		    	  关闭: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
	     $('#addstatus-message').dialog("open");
	     $('.btn-agree').click(function(e){
	    /* 	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">1</td><td colspan="2">你已经同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');
	     var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	 $('#addstatus-message tr:eq(1) td').css('border-top-color','#fff');
	    }
	   
	    if($('#addstatus-message tr').length==4){
	      	$('#addstatus-message tr:eq(2) td').css('border-top-color','#fff')
	     }*/
	      var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你已经同意王红同学加入《鲁迅文化研究与国民素质提高》课题。');
	    }else{
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你已经同意李西书同学加入《胡适文化研究与国民素质提高》课题。');
	    }
          $(e.target).closest('tr').find('td:eq(2)').remove();
	     });
	     $('.btn-not-agree').click(function(e){
	     /*	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">2</td><td colspan="2">你不同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');
	    var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	 $('#addstatus-message tr:eq(1) td').css('border-top-color','#fff');
	    }
	   
	    if($('#addstatus-message tr').length==4){
	      	$('#addstatus-message tr:eq(2) td').css('border-top-color','#fff')
	     }*/
	      var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你不同意王红同学加入《鲁迅文化研究与国民素质提高》课题。');
	    }else{
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你不同意李西书同学加入《胡适文化研究与国民素质提高》课题。');
	    }
          $(e.target).closest('tr').find('td:eq(2)').remove();
	     });
		},
	
		changeUser:function(e){
			var str=$(e.target).val();
			if (str=='1') {
				$("#myketi").hide();
				$(".myketi").hide();
				
			}else if(str=='2') {
				$("#myketi").show();
				$(".myketi").show();
				$(".status1").show();
				$(".status2,.status3,.status4").hide();
				$(".xinjian").click(function(){
					alert('已达到课题数上限，不能继续创建课题');
					
					return false;
				});
				$(".jiaru").click(function(){
					alert('已达到课题数上限，不能继续加入课题');
					return false;
				});
			}else if(str=='3') {
				$("#myketi").show();
				$(".myketi").show();
				$(".status1,.status3,.status4").hide();
				$(".status2").show();
				$(".xinjian").click(function(){
					alert('已达到课题数上限，不能继续创建课题');
					return false;
				});
				$(".jiaru").click(function(){
					alert('已达到课题数上限，不能继续加入课题');
					return false;
				});
			}else if(str=='4') {
				$("#myketi").show();
				$(".myketi").show();
				$(".xinjian").click(function(){
					alert('已达到课题数上限，不能继续创建课题');
					return false;
				});
				$(".jiaru").click(function(){
					alert('已达到课题数上限，不能继续加入课题');
					return false;
				});
				$(".status1,.status2,.status4,.btn-asktoadd").hide();
				$(".status3").show();
			}else if(str=='5') {
				$("#myketi").show();
				$(".myketi").show();
				$(".xinjian").click(function(){
					alert('已达到课题数上限，不能继续创建课题');
					return false;
				});
				$(".jiaru").click(function(){
					alert('已达到课题数上限，不能继续加入课题');
					return false;
				});
				$(".status1,.status2,.status3,.btn-asktoadd").hide();
				$(".status4").show();
			}
			
		}
		
		
		
	});
	return ModuleView;
	
});
