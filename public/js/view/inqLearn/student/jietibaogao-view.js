define(['underscore', 'resthub', 'und!template/inqLearn/student/jietibaogao'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click .btn-submit':'tijiao',
			'click .btn-save':'toback',
			'click .btn-edit':'edit',
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
			if (currentuser=='teacher') {
				$('.btn-teacher').show();
				$('.btn-student').hide();
			}else if(currentuser=='look'){
				$('.btn-teacher').hide();
				$('.btn-student').hide();
				
			}else if(currentuser=='yxb'){
				$('.btn-teacher').show();
				$('.btn-student').show();
				
			}else{
				$('.btn-teacher').hide();
				$('.btn-student').show();
			};
			
			return _self;
		},
		tijiao:function(){
			if(confirm('提交之后无法编辑结题报告及上传附件！')){
				$('.btn-edit').hide();
			}
			
		},
		toback:function(){
			$('#editOpening').hide();
			$('#showOpening').show();
		},
		edit:function(){
			$('#editOpening').show();
			$('#showOpening').hide();
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
