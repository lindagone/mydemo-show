define(['underscore', 'resthub', 'und!template/inqLearn/student/newxuanti',
'view/inqLearn/student/stu-xuantibase-view','view/inqLearn/student/stu-index-view','view/inqLearn/student/kaitidetail-view'], 
function(_, Resthub, template,xuantiBaseView,stuIndexView,KaitiDetailView) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		currentpos:null,
		events : {
			'click .btn-sure':'beSure'
		},

		initialize : function(options) {
			var _self = this;
			currentpos=options.currentpos;
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			
			return _self;
		},
		beSure:function(){
			if (currentpos=='edit') {
				new xuantiBaseView({root:"#bodyContainer"});
			}else if(currentpos=='newone') {
			
			  new stuIndexView({root:"#bodyContainer"});
			}else if(currentpos=='kaiti') {
			
			 new KaitiDetailView({root:"#bodyContainer"});
			}
		}
		
	});
	return ModuleView;
	
});
