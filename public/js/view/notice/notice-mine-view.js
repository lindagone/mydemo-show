define(['underscore', 'backbone', 'resthub', 'hbs!template/notice/notice-mine','view/notice/notice-detail-view'],
function(_, Backbone, Resthub, myNoticeTmpl,DetailNoticeView){
  var MyNoticeView = Resthub.View.extend({
    template: myNoticeTmpl,
    
    events: {
    	 'click #item1' 				: 'showDetail'
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
	},
	//通知详情无需任何操作，使用模态对话框显示
	showDetail:function(){
		var detailView = new DetailNoticeView();
		$("#noticeDetail").html(detailView.el);
		$("#noticeDetail").modal();
	}
	
  });
  return MyNoticeView;
});