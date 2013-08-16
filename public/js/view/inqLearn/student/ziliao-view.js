define(['underscore', 'resthub', 'und!template/inqLearn/student/ziliao'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click  .btn-edit':'edit',
			'click .btn-back':'comeback',
			'click .editOpeningScore':'editOpeningScore',
			'click .returnOpeningScore':'returnOpeningScore'
			
		},

		initialize : function(options) {
			var _self = this;
			currentuser=options.currentuser;
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			if (currentuser=='look') {
				$('.btn-look').hide();
				$('.btn-teacher').hide();
			}else if(currentuser=='teacher'){
				$('.btn-look').hide();
				$('.btn-teacher').show();
			}else if(currentuser=='yxb'){
				$('.btn-look').show();
				$('.btn-teacher').show();
			};
			return _self;
		},
		
		edit:function(){
			$('#editziliao').show();
			$('#lookziliao').hide();
		},
		comeback:function(){
			$('#editziliao').hide();
			$('#lookziliao').show();
		},
		editOpeningScore:function(){
			$('#editOpeningScore').show();
			$('#showOpeningScore').hide();
		},
		returnOpeningScore:function(){
			$('#editOpeningScore').hide();
			$('#showOpeningScore').show();
		},
		
		
	});
	return ModuleView;
	
});
