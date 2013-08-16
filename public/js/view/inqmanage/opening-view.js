define(['underscore', 'resthub', 'und!template/inqmanage/opening'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentuser:null,
		events : {
			'click .editOpening' : 'editOpening',
			'click .returnOpening' : 'returneditOpening',
			'click .editOpeningScore' : 'editOpeningScore',
            'click .returnOpeningScore' : 'returnOpeningScore'
		},

		initialize : function(options) {
			var _self = this;
			currentuser=options.currentuser;
			console.log(typeof currentuser);
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			if(currentuser=='admin'){
				$('.btn-remark').hide();
			}else if(currentuser=='yxb'||currentuser=='cwh'){
				$('.btn-remark').hide();
				$('.editOpening').hide();
				$('.editOpeningScore').hide();
			} else if(currentuser=='tch'){
				$('.btn-remark').hide();
				$('.editOpening').hide();				
			}else if(currentuser=='tchpj'){
				$('.btn-remark').hide();
				$('.editOpening').hide();	
				$('.backtoactivity').hide();
				$('.backtoremark').show();			
			} else{
				$('.editOpeningScore').hide();
				
			}
			
			return _self;
		},
		
		editOpening : function(){
		    $('#showOpening').hide();
		    $('#editOpening').show();
		},
		
		returneditOpening : function(){
		    $('#showOpening').show();
            $('#editOpening').hide();
		},
		
		editOpeningScore : function(){
		    $('#showOpeningScore').hide();
            $('#editOpeningScore').show();  
		},
		
		returnOpeningScore : function(){
		    $('#editOpeningScore').hide();
            $('#showOpeningScore').show();
		}
		
	});
	return ModuleView;
}); 