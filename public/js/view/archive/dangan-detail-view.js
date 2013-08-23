define(['underscore', 'resthub', 'und!template/archive/dangan-detail'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-edit':'edit',
			'click .btn-save':'saveinf',
			'click .btn-deletefj':'deletefj'
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
		edit:function(){
			$('#edit').show();
			$('#show').hide();
		},
		saveinf:function(){
			$('#edit').hide();
			$('#show').show();
		},
		deletefj:function(){
			$('#sc').hide();
			$('#tj').show();
		}
	});
	return ModuleView;
}); 