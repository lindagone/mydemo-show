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
	     	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">1</td><td colspan="2">你已经同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');
	     });
	     $('.btn-not-agree').click(function(e){
	     	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">2</td><td colspan="2">你不同意王红同学加入《鲁迅文化研究与国民素质提高》课题。</td></tr>');
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
	     $('.btn-agree').click(function(e){
	     	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">1</td><td colspan="2">你已经同意加入指导《商场中商品楼层摆放位置与消费者心理关系的研究》课题。</td></tr>');
	     });
	     $('.btn-not-agree').click(function(e){
	     	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td class="inCenter">2</td><td colspan="2">你不同意加入指导《悄然兴起的国学私塾教育情况调研》课题。</td></tr>');
	     });
		},
		
		
		
		
	});
	return ModuleView;
	
});
