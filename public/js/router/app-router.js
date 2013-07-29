define([ 'backbone', 'view/codeGena/codeGenerator-view', 'view/codeGena/demoGenerator-view', 'view/mail/mail-base-view', 'view/notice/notice-index-view',
		'view/salary/mysalary-view', 'view/salary/salary-manage-view', 'view/salary/salary-initialize-view', 'view/salary/salary-accountmanage-view',
		'view/salary/salary-overview-view','view/mytest/mytest-view',
		'view/hr/hr-index-view','view/hr/personview-index-view',
         'view/hr/hrmanage-index-view','view/hr/teachersearch-view','view/hr/setting-teacherstatus-view',
         'view/hr/improve-teacherinf-view','view/hr/maintain-index-view', 'view/hr/setTeacherInfo-view',
		'backbone-queryparams'], function(
		Backbone, CodeGeneratorView, DemoGeneratorView, MailBaseView, NoticeIndexView,
		MysalaryView, SalaryManageView, SalaryInitView, AccountManageView, SalaryOverview, TestView,
		HrIndexView,PersonViewIndexView,HrManageIndexView,TeacherSearchView,TeacherSettingView,TeaInfImproveView,MaintainIndexView,
		TeacherInfoView) {
	var options = {
		routes : {
			'': 'anything',
			'generateCode.html'     : 'generateCode',
			'generateDemo.html'     : 'generateDemo',
			'mailbox.html'          : 'mailbox',
			'notice.html'           : 'notice',
			'mysalary.html'         : 'mysalary',
			'salarymanager.html'	: 'salarymanager',
			'salaryinit.html'       : 'salaryinit',
			'accountmanager.html'   : 'accountmanager',
			'salaryoverview.html' 	: 'salaryoverview',
			'hr.html'               : 'hrFunctionManage',
			'personview.html'       : 'personView',
			'hrmanage.html'         : 'hrManage',
			'teachersearch.html'    : 'teacherSearch',
			'setting.html'          : 'teacherSetting',
			'improve.html'          : 'infImprove',
			'maintain.html'         : 'maintainInf',
			'teacherinfo.html'         : 'teacherinfo',
			'test.html':'gotest',
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
		generateDemo : function(){
			console.log("into gena demo");
			new DemoGeneratorView({root:"#bodyContainer"});
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
		mysalary : function(){
			console.log("into mysalary page");
			new MysalaryView({root : $('#bodyContainer')});
		},
		salarymanager : function(){
			console.log("into salarymanager page");
			new SalaryManageView({root : $('#bodyContainer')});
		},
		salaryinit : function(){
			console.log("into salaryinit page");
			new SalaryInitView({root : $('#bodyContainer')});
		},
		accountmanager : function(){
			console.log("into accountmanager page");
			new AccountManageView({root : $('#bodyContainer')});
		},
		salaryoverview : function(){
			console.log("into salaryoverview page");
			new SalaryOverview({root : $('#bodyContainer')});
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
		teacherinfo: function(){
			new TeacherInfoView({root:$('#bodyContainer')});
		}
	};

	var AppRouter = Backbone.Router.extend(options);
	return AppRouter;
});