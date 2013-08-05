define(['underscore', 'resthub', 'und!template/inqmanage/QHreport1'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .editOpening' : 'editOpening',
			'click .returnOpening' : 'returneditOpening',
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
		
		editOpening : function(){
		    $('#showOpening').hide();
		    $('#editOpening').show();
		},
		
		returneditOpening : function(){
		    $('#showOpening').show();
            $('#editOpening').hide();
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