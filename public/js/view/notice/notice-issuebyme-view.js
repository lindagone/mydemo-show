define(['underscore', 'backbone', 'resthub', 'hbs!template/notice/notice-issuebyme'],
function(_, Backbone, Resthub, issueByMeNoticeTmpl){
  var NoticeIssueByMeView = Resthub.View.extend({
    template: issueByMeNoticeTmpl,
    
    events: {
    	 'click #readstatus' 	: 'readStatus',
    	 'click #shortmessage':'shortmessageStatic'
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
		$( "#readstatus-message" ).hide();
		$( "#short-message" ).hide();
		return _self;
	},
	//阅读情况显示在一个对话框中
	readStatus:function(){
		$( "#readstatus-message" ).dialog({
		      autoOpen: false,
		      width:600,
		      modal: true,
		      buttons: {
		    	  关闭: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
	  $("#readstatus-message").dialog("open");
	},
	//短信发送情况显示在一个对话框中
	shortmessageStatic:function(){
		$( "#short-message" ).dialog({
		      autoOpen: false,
		      width:600,
		      modal: true,
		      buttons: {
		        关闭: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
	  $("#short-message").dialog("open");
	}
	
  });
  return NoticeIssueByMeView;
});