define(['underscore', 'backbone', 'resthub', 'hbs!template/notice/notice-detail'],
function(_, Backbone, Resthub, detailNoticeTmpl){
  var DetailNoticeView = Resthub.View.extend({
    template: detailNoticeTmpl,
    
    events: {
    	// 'click .sys-func-page' 				: 'showSysPage'
    },
    
    initialize: function() {
    	//console.log('a');
    	//_.bindAll(this, 'render');
    	var _self = this;
        _self.render();
    },
    
    render : function() {
    	var _self = this;
		_self.$el.html(_self.template());
		return _self;
	}
	
  });
  return DetailNoticeView;
});