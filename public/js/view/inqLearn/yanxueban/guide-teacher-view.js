define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/guide-teacher'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-edit':'edit',
			'click .btn-save':'saveandback',
			'click .btn-set':'setinf',
			'click .btn-goback':'back'
			
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
			$('#showinf').hide();
		},
		saveandback:function(){
			$('#edit').hide();
			$('#showinf').show();
		},
		
		setinf:function(){
			$('#editinf').show();
			$('#look').hide();
		},
		back:function(){
			$('#editinf').hide();
			$('#look').show();
		},
		
	});
	return ModuleView;
	
});
