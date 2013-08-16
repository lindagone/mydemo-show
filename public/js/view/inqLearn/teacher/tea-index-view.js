define(['underscore', 'resthub', 'und!template/inqLearn/teacher/tea-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-asktoadd':'askToAdd',
			//'click .btn-addketi':'addketi'
			
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
		      width:400,
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
	     	$(e.target).closest('tbody').append('<tr><td colspan="2">你已经同意王红同学加入课题。</td></tr>');
	     });
	     $('.btn-not-agree').click(function(e){
	     	$(e.target).closest('tr').hide();
	     	$(e.target).closest('tbody').append('<tr><td colspan="2">你不同意王红同学加入课题。</td></tr>');
	     });
		},
	
		
		
		
		
	});
	return ModuleView;
	
});
