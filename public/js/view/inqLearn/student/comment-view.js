define(['underscore', 'resthub', 'und!template/inqLearn/student/comment'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click .btn-replay':'replay'
			
		},

		initialize : function(options) {
			var _self = this;
			currentuser=options.currentuser;
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			if(currentuser=='teacher'){
				$('.btn-teacher').show();
				$('.btn-student').hide();
			}else if(currentuser=='shenhe'){
				$('.btn-teacher').show();
				$('.btn-student').show();
			}
			return _self;
		},
		replay:function(){
			$('#replaylk').show();
			$('#tongyong').hide();
		}
		
		
		
		
	});
	return ModuleView;
	
});
