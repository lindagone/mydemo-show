define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/jieti-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			
			'click .xuefen':'editxuefen'
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
		
		editxuefen:function(){
			var y=$('#xuefen').html();
			var s=prompt("请输入该课题的学分");
			$('#xuefen').html(s);
			
		}
		
		
		
	});
	return ModuleView;
	
});
