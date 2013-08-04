define(['underscore', 'resthub', 'und!template/inqmanage/inqinfolook'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .editBasicInfo' : 'editBasicInfo',
			'click .returnBasicInfo' : 'returnBasicInfo'
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
		
		editBasicInfo : function(){
		    $('#showBasic').hide();
		    $('#editBasic').show();
		},
		
		returnBasicInfo : function(){
		    $('#showBasic').show();
            $('#editBasic').hide();
		}
		
	});
	return ModuleView;
}); 