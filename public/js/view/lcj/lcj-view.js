define(['underscore', 'resthub', 'und!template/lcj/lcj'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .editOpeningScore' : 'editOpeningScore',
            'click .returnOpeningScore' : 'returnOpeningScore'
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
		
		editOpeningScore : function(){
		    $('#showOpeningScore').hide();
            $('#editOpeningScore').show();  
		},
		
		returnOpeningScore : function(){
		    $('#editOpeningScore').hide();
            $('#showOpeningScore').show();
		}
		
	});
	return ModuleView;
}); 