define(['backbone'], function(Backbone) {
    var Test = Backbone.Model.extend({
    	urlRoot: window.contextBase + '/api/test',
    	clear: function() {
            this.destroy();
        }
    });
    return Test;
});