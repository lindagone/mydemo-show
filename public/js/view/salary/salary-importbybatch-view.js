define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-importbybatch'],
function(_, Backbone, Resthub, importDataTmpl){
  var SalaryImportView = Resthub.View.extend({
    template: importDataTmpl,
    
    events: {
    	
    },
    
    initialize: function() {
    	
    	var _self = this;
        _self.render();
    },
    
    render : function() {
    	
    	var _self = this;
		_self.$el.html(_self.template());

		return _self;
	}
	
  });
  return SalaryImportView;
});