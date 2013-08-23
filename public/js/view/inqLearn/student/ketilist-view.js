define(['underscore', 'resthub', 'und!template/inqLearn/student/ketilist'], 
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
			if(currentuser=='student'){
				$('#stubody').show();
				$('#teabody').hide();
			}else{
				$('#stubody').hide();
				$('#teabody').show();
			}
			return _self;
		},
		
		
		
		
		
	});
	return ModuleView;
	
});
