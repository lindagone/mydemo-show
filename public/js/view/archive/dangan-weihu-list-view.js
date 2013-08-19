define(['underscore', 'resthub', 'und!template/archive/dangan-weihu-list'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentstatus:null,
		events : {
			
		},

		initialize : function(options) {
			var _self = this;
			currentstatus=options.currentstatus;
			console.log(currentstatus);
			_self.render();
		},

		render : function(data) {
			var _self = this;
			
			_self.$el.html(_self.template());
			
			if(currentstatus=='weiguidang'){
				$('.btn-weiguidang').show();
				$('.btn-yiguidang').hide();
				$('#yiguidang').hide();
				$('#weiguidang').show();
			}else if(currentstatus=='yiguidang'){
				$('.btn-weiguidang').hide();
				$('.btn-yiguidang').show();
				$('#yiguidang').show();
				$('#weiguidang').hide();
			}else if(currentstatus=='quanbu'){
				$('.btn-weiguidang').show();
				$('.btn-yiguidang').hide();
				$('#quanbu').show();
				$('#yiguidang').hide();
				$('#weiguidang').hide();
			}
			return _self;
		},
		
		
	});
	return ModuleView;
}); 