define([ 'backbone', 'view/mail/mail-base-view', 'view/notice/notice-index-view', 'view/mytest/mytest-view',		     
           'router/studentmanage-router','router/hr-router',
		 'router/demogena-router','router/salary-router','router/inq-router','router/lcj-router','router/inqlearn-router',
		 'backbone-queryparams'], function(
		Backbone, MailBaseView, NoticeIndexView,TestView,				
		StuManageRouter,HrRouter,GenaRouter, SalaryRouter, InqRouter,LcjRouter,InqLearnRouter) {
	
	var routes = _.extend(
		StuManageRouter.localoptions,
		   HrRouter.localoptions,
			GenaRouter.localoptions,
			SalaryRouter.localoptions,
			InqRouter.localoptions,LcjRouter.localoptions,
			InqLearnRouter.localoptions,
			
			{
				
			'': 'anything',
			'mailbox.html'          : 'mailbox',
			'notice.html'           : 'notice',			
			'test.html':'gotest',
	  		'*anything': 'anything'
	});
	
	var methods = _.extend(
		StuManageRouter.localmethod,
		    HrRouter.localmethod,
			GenaRouter.localmethod,
			SalaryRouter.localmethod,
			InqRouter.localmethod,LcjRouter.localmethod,
			InqLearnRouter.localmethod,
			
			{
				
			anything: function(whatever) {
		      this.anything = whatever;
		      console.info("anything is " + whatever);
		    },
		    
			gotest : function(){
				console.log("into test demo");
				new TestView({root:"#bodyContainer"});
			},
			mailbox : function(){
				console.log("into mailbox page");
				new MailBaseView({root : $('#bodyContainer')});
			},
			notice : function() {
				console.log("into notice page");
				new NoticeIndexView({root : $('#bodyContainer')});
			},
			
			
			
	});
	
	
	var AppRouter = Backbone.Router.extend(_.extend({routes:routes},methods));
	
	return AppRouter;
});