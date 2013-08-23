define(['underscore', 'resthub', 'und!template/archive/dangan-look-detail'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentpos:null,
		events : {
			
		},

		initialize : function(options) {
			var _self = this;
			currentpos=options.currentpos;
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
		if(currentpos=='search'){
			$('.lanmutj').hide();
			$('.searchtj').show();
		}else{
			$('.lanmutj').show();
			$('.searchtj').hide();
		}
			return _self;
		},
		
		
	});
	return ModuleView;
}); 