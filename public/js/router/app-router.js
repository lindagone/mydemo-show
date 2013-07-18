define([ 'backbone','view/codeGena/codeGenerator-View','view/mail/mail-base-view','view/notice/notice-index-view','backbone-queryparams'], function(
		Backbone, CodeGeneratorView, MailBaseView, NoticeIndexView) {
	var options = {
		routes : {
			'': 'anything',
			'generateCode.html':'generateCode',
			'mailbox.html': 'mailbox',
			'notice.html':'notice',
      		'*anything': 'anything'
		},
	
	    anything: function(whatever) {
	      this.anything = whatever;
	      console.info("anything is " + whatever);
	    },
	    generateCode : function(){
	    	console.log("into gena code");
			new CodeGeneratorView({root:"#bodyContainer"});
		},
		mailbox : function(){
			console.log("into mailbox page");
			new MailBaseView({root : $('#bodyContainer')});
		},
		notice : function() {
			console.log("into notice page");
			new NoticeIndexView({root : $('#bodyContainer')});
		}
	};

	var AppRouter = Backbone.Router.extend(options);
	return AppRouter;
});