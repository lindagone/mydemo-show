/**
 * 套账管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-accountmanage', ],
function(_, Backbone, Resthub, baseTmpl){
  var AccountManageView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click button.newaccount' : 'addAccount',
    	'click button.save, button.return' : 'returnList'
    },
    
    initialize: function(options) {
    	var _self = this;

        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());

		return _self;
	},
	
	addAccount : function(){
		var _self = this;
		
		_self.$el.find("div.list").hide();
		_self.$el.find("div.addnew").show();
	},
	
	returnList : function(){
		var _self = this;
		
		_self.$el.find("div.addnew").hide();
		_self.$el.find("div.list").show();
	}
	
  });
  return AccountManageView;
});