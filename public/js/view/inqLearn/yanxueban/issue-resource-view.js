define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/issue-resource'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-fabu':'fabu',
			'click .issueresource':'issueresource'
			
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
		fabu:function(){
			$('#list').show();
			$('#upload').hide();
		},
		issueresource:function(){
			$('#list').hide();
			$('#upload').show();
		},
		
		
		
		
	});
	return ModuleView;
	
});
