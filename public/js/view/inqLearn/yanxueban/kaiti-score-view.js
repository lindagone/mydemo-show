define(['underscore', 'resthub', 'und!template/inqLearn/yanxueban/kaiti-score'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click .btn-recordscore':'recordscore'
			
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
		recordscore:function(){
		
		 $('#recordscoretip').dialog({
		 	title:'请输入开题宣讲成绩',
			
      height:160,
      modal: true,
      buttons: {
        "确定": function() {
          $( this ).dialog( "close" );
        },
        取消: function() {
          $( this ).dialog( "close" );
        }
      }
		 	
		 });
		}
		
		
		
		
	});
	return ModuleView;
	
});
