define(['underscore', 'resthub', 'und!template/inqLearn/teacher/tea-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-asktoadd':'askToAdd',
			'click .btn-asktojoin':'addToJoin'
			
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
	      /*	$(e.target).closest('tr').hide();    	
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter" >1</td><td colspan="2" >你已经同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');
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
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter" >2</td><td colspan="2" >你不同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');     
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
	  addToJoin:function(){
			
			$('#joinstatus-message').dialog({
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
	     $('#joinstatus-message').dialog("open");
	     $('.btn-agree2').click(function(e){
	     //	$(e.target).closest('tr').hide();
	     	
	    /* 	$(e.target).closest('tbody').append('<tr><td class="inCenter">1</td><td colspan="2">你已经同意指导《商场中商品楼层摆放位置与消费者心理关系的研究》课题。</td></tr>');
	     var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	 $('#joinstatus-message tr:eq(1) td').css('border-top-color','#fff');
	    }
	   
	    if($('#joinstatus-message tr').length==4){
	      	$('#joinstatus-message tr:eq(2) td').css('border-top-color','#fff')
	     }*/
	   var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你已经同意指导《商场中商品楼层摆放位置与消费者心理关系的研究》课题。');
	    }else{
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你已经同意指导《《悄然兴起的国学私塾教育情况调研》课题。');
	    }
          $(e.target).closest('tr').find('td:eq(2)').remove();
	     });
	     $('.btn-not-agree2').click(function(e){
	     	/*$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">2</td><td colspan="2">你不同意指导《悄然兴起的国学私塾教育情况调研》课题。</td></tr>');
	     var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	 $('#joinstatus-message tr:eq(1) td').css('border-top-color','#fff');
	    }
	   
	    if($('#joinstatus-message tr').length==4){
	      	$('#joinstatus-message tr:eq(2) td').css('border-top-color','#fff')
	     }*/
	    var p=$(e.target).closest('tr').index();
	    if(p==0){
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你不同意指导《商场中商品楼层摆放位置与消费者心理关系的研究》课题。');
	    }else{
	    	$(e.target).closest('tr').find('td:eq(1)').attr('colspan','2').html('你不同意指导《《悄然兴起的国学私塾教育情况调研》课题。');
	    }
          $(e.target).closest('tr').find('td:eq(2)').remove();
	     
	     });
		},
		
		
		
		
	});
	return ModuleView;
	
});
