define(['underscore', 'resthub', 'und!template/archive/lanmu-weihu-list'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentstatus:null,
		currentoper:null,
		events : {
			//'click .btn-new':'newarchive'
		},

		initialize : function(options) {
			var _self = this;
			currentstatus=options.currentstatus;
			currentoper=options.currentoper;
			console.log(currentoper);
			
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			if(currentoper=='lanmu'){
				$('.btn-new').show();
				$('#titlestu').show();
			}else{
				$('.btn-new').hide();
				$('#titlestu').hide();
			}
			
			return _self;
		},
		
		
	});
	return ModuleView;
}); 