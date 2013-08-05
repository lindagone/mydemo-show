define(['underscore', 'resthub', 'und!template/inqmanage/inqinfoyxb'], 
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
			alert("该按钮只有该课题的指导老师和组长可以看见。（超级管理员也可以看见，普通学生、普通老师、研学办的老师都看不见。）");
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