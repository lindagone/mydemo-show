define(['backbone'], function(Backbone) {
    var {{ClassName}} = Backbone.Model.extend({
    	urlRoot: window.contextBase + '/api/{{className}}',
    	clear: function() {
            this.destroy();
        }
    });
    return {{ClassName}};
});