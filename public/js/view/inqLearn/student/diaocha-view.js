define(['underscore', 'resthub', 'und!template/inqLearn/student/diaocha'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click .btn-submit':'tijiao',
			'click .btn-edit':'editOpening',
			'click .returnOpening':'returnOpening',
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
			 if(currentuser=='teacher'){
			 	$('.btn-student').hide();
			 	$('.toremark').show();
			 }else if(currentuser=='look'){
			 	$('.editOpening').hide();
			 	$('.btn-student').hide();
			 	$('.toremark').hide();
			 
			 }else if(currentuser=='yxb'){
			 	$('.editOpening').show();
			 	$('.btn-student').show();
			 	$('.toremark').show();
			 
			 }
			
			return _self;
		},
		tijiao:function(){
			if(confirm('提交之后无法编辑开题报告及上传附件！')){
				$('.btn-edit').hide();
			}
			
		},
		editOpening:function(){
			$('#editOpening').show();
			$('#showOpening').hide();
		},
		returnOpening:function(){
			$('#editOpening').hide();
			$('#showOpening').show();
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
