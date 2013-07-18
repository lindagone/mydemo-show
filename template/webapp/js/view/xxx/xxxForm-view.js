define(['underscore', 'resthub', 'und!template/{{className}}/{{className}}Form', 'model/{{className}}'], 
function(_, Resthub, template, {{ClassName}}) {
	var FormView = Resthub.View.extend({
		template : template,

		events : {
			'click button.saveItem' : 'saveItem'
		},

		initialize : function(options) {
			var _self = this;
			
			//id 不存在，add
			if(!options.id){
				_self.type = "add";
				_self.model = new {{ClassName}}();
				_self.render();
			}
			
			//id 存在，type不存在，edit
			if(!!options.id && !options.type){
				_self.type = "edit"; 
				_self.model = new {{ClassName}}({id:options.id});
				_self.model.fetch().done(function(){
					_self.render();
				});
			}
			
			//id 存在，type存在，show
			if(!!options.id && !!options.type){
				_self.type = "show"; 
				_self.model = new {{ClassName}}({id:options.id});
				_self.model.fetch().done(function(){
					_self.render();
				});
			}
			
		},

		render : function() {
			var _self = this;
			
			var options = {
				type: _self.type,
				model: _self.model.toJSON()};
				
			_self.$el.html(_self.template(options));

			_.defer(function(){
				_self.$el.find("form.{{className}}-form").validate();
			});
			return _self;
		},
		
		saveItem : function(e){
			var _self = this;
			
			if(!_self.$el.find("form.{{className}}-form").valid()) return;
				
		 	_self.populateModel();
	    	_self.model.save()
	    		.done(function(){
					window.globalNotify({
						type:"success",
						htmlContent:"保存成功！",
						cb:function(){
//							window.approuter.navigate(window.contextBase + "/api/{{className}}/");
						}
					});
	    		});
	   
		}
		
	});
	return FormView;
}); 