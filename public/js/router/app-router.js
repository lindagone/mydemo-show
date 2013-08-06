define([ 'backbone', 'view/mail/mail-base-view', 'view/notice/notice-index-view', 'view/mytest/mytest-view',
		 'view/hr/hr-index-view','view/hr/personview-index-view',
         'view/hr/hrmanage-index-view','view/hr/teachersearch-view','view/hr/setting-teacherstatus-view',
         'view/hr/improve-teacherinf-view','view/hr/setTeacherInfo-view',
         'view/studentmanage/setting-studentstatus-view','view/studentmanage/enrollmentmaintain-view',
		 'view/studentmanage/setstudentInfo-view','view/studentmanage/look-enrollment-view','view/studentmanage/namelist-view',
		 'view/studentmanage/look-inf-view','view/studentmanage/improve-inf-view',

		 'router/demogena-router','router/salary-router','router/inq-router',
		 'backbone-queryparams'], function(
		Backbone, MailBaseView, NoticeIndexView,
		TestView,
		HrIndexView,PersonViewIndexView,HrManageIndexView,TeacherSearchView,TeacherSettingView,TeaInfImproveView,MaintainIndexView,
		StudentSettingView,EnrollmentChangeMaintainView,StudentInfoView,EnrollmentLookView,
		NameListView,LookInfView,ImproveInfoView,
		
		GenaRouter, SalaryRouter, InqRouter) {
	
	var routes = _.extend(
			GenaRouter.localoptions,
			SalaryRouter.localoptions,
			InqRouter.localoptions,{
				
			'': 'anything',
			'mailbox.html'          : 'mailbox',
			'notice.html'           : 'notice',
			
			'hr.html'               : 'hrFunctionManage',
			'personview.html'       : 'personView',
			'hrmanage.html'         : 'hrManage',
			'teachersearch.html'    : 'teacherSearch',
			'setting.html'          : 'teacherSetting',
			'improve.html'          : 'infImprove',
			'stusetting.html'       : 'studentSetting',
			'stuinf.html'           : 'studentInf',
			'look.html'             : 'lookstuInf',
			'namelist.html'         : 'nameList',
			'lookinf.html'          : 'lookInf',
			'stuimprove.html'       : 'stuImproveInf',
			'enrollmentchange.html'         : 'enrollmentChange',
			'maintain.html'         : 'maintainInf',
			
			'test.html':'gotest',
	  		'*anything': 'anything'
	});
	
	var methods = _.extend(
			GenaRouter.localmethod,
			SalaryRouter.localmethod,
			InqRouter.localmethod,{
				
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
			
			hrFunctionManage:function(){
				new HrIndexView({root:$('#bodyContainer')});
			},
			personView:function(){
				new PersonViewIndexView({root:$('#bodyContainer')});
			},
			hrManage:function(){
				new HrManageIndexView({root:$('#bodyContainer')});
			},
			teacherSearch:function(){
				new TeacherSearchView({root:$('#bodyContainer')});
			},
			teacherSetting:function(){
				new TeacherSettingView({root:$('#bodyContainer')});
			},
			infImprove:function(){
				new TeaInfImproveView({root:$('#bodyContainer')});
			},
			maintainInf:function(){
				new MaintainIndexView({root:$('#bodyContainer')});
			},
			studentSetting:function(){
				new StudentSettingView({root:$('#bodyContainer')});
			},
			enrollmentChange:function(){
				new  EnrollmentChangeMaintainView({root:$('#bodyContainer')});
			},
			studentInf:function(){
				new  StudentInfoView({root:$('#bodyContainer')});
			},
			lookstuInf:function(){
				new EnrollmentLookView({root:$('#bodyContainer')});

			},
			nameList:function(){
				new NameListView({root:$('#bodyContainer')});

			},
			lookInf:function(){
				new LookInfView({root:$('#bodyContainer')});
			},
			stuImproveInf:function(){
				new ImproveInfoView({root:$('#bodyContainer')});
			}
	});
	
	
	var AppRouter = Backbone.Router.extend(_.extend({routes:routes},methods));
	
	return AppRouter;
});