define([ 'backbone','view/codeGena/codeGenerator-view','view/test/testList-view','view/mail/mail-base-view','view/notice/notice-index-view','backbone-queryparams'], function(
		Backbone, CodeGeneratorView, TestView, MailBaseView, NoticeIndexView) {
	var options = {
		routes : {
			'': 'anything',
			'generateCode.html':'generateCode',
			'test.html':'test',
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
		test : function(){
			console.log("into test");
			new TestView({root:"#bodyContainer"});
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