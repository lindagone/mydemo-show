define([ 'backbone', 'view/mail/mail-base-view', 'view/notice/notice-index-view', 'view/mytest/mytest-view', 'view/portal/portal-view',		     
           'router/studentmanage-router','router/hr-router',
		 'router/demogena-router','router/salary-router','router/inq-router',
		 'router/inqlearn-router','router/archive-router','view/picture/pic-index-view',
		 'backbone-queryparams'], function(
		Backbone, MailBaseView, NoticeIndexView,TestView, PortalView,				
		StuManageRouter,HrRouter,GenaRouter, SalaryRouter, InqRouter,InqLearnRouter,ArchiveRouter,PicIndexView) {
	
	var routes = _.extend(
		StuManageRouter.localoptions,
		   HrRouter.localoptions,
			GenaRouter.localoptions,
			SalaryRouter.localoptions,
			InqRouter.localoptions,
			InqLearnRouter.localoptions,ArchiveRouter.localoptions,
			
			{
			'pic.html':'viewPicture',	
			'': 'anything',
			'mailbox.html'          : 'mailbox',
			'notice.html'           : 'notice',			
			'test.html':'gotest',
			'portal.html':'goportal',
	  		'*anything': 'anything'
	});
	
	var methods = _.extend(
		StuManageRouter.localmethod,
		    HrRouter.localmethod,
			GenaRouter.localmethod,
			SalaryRouter.localmethod,
			InqRouter.localmethod,
			InqLearnRouter.localmethod,ArchiveRouter.localmethod,
			
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
			goportal : function(){
				console.log("into portal demo page");
				new PortalView({root : $('#bodyContainer')});
			},
			viewPicture:function(){
				new PicIndexView({root : $('#bodyContainer')});
			}
			
			
			
	});
	
	
	var AppRouter = Backbone.Router.extend(_.extend({routes:routes},methods));
	
	return AppRouter;
});