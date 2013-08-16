define(['underscore', 'resthub', 'und!template/inqLearn/shuoming'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			
			
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
		
		
		
		
		
	});
	return ModuleView;
	
});
