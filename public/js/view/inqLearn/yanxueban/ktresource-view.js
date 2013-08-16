define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/ktresource'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			//'click .btn-search':'search',
			//'click .btn-reset':'againsearch'
			
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
		search:function(){
			//$('#searchcondition').hide();
			$('#result').show();
		},
		againsearch:function(){
			$('#searchcondition').show();
			$('#result').hide();
		},
		
		
		
		
	});
	return ModuleView;
	
});
