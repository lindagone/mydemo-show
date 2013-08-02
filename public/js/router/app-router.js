define([ 'backbone', 'view/codeGena/codeGenerator-view', 'view/codeGena/demoGenerator-view', 'view/mail/mail-base-view', 'view/notice/notice-index-view',
		'view/salary/mysalary-view', 'view/salary/salary-manage-view', 'view/salary/salary-initialize-view', 'view/salary/salary-accountmanage-view',
		'view/salary/salary-overview-view','view/mytest/mytest-view',
		'view/hr/hr-index-view','view/hr/personview-index-view',
         'view/hr/hrmanage-index-view','view/hr/teachersearch-view','view/hr/setting-teacherstatus-view',
         'view/hr/improve-teacherinf-view','view/hr/setTeacherInfo-view',
         'view/studentmanage/setting-studentstatus-view','view/studentmanage/enrollmentmaintain-view',
		'view/studentmanage/setstudentInfo-view','view/studentmanage/look-enrollment-view',
		'view/inqmanage/inqmanage-view', 'view/inqmanage/inqinfo-view', 'view/inqmanage/myinq-stu-view', 'view/inqmanage/myinq-tch-view',
		'view/inqmanage/myinq-mng-view', 'view/inqmanage/applyinq-view', 'view/inqmanage/issueinq-view', 'view/inqmanage/showinq-view',
		'view/inqmanage/inqinfolook-view', 'backbone-queryparams'], function(
		Backbone, CodeGeneratorView, DemoGeneratorView, MailBaseView, NoticeIndexView,
		MysalaryView, SalaryManageView, SalaryInitView, AccountManageView, SalaryOverview, TestView,
		HrIndexView,PersonViewIndexView,HrManageIndexView,TeacherSearchView,TeacherSettingView,TeaInfImproveView,MaintainIndexView,
		StudentSettingView,EnrollmentChangeMaintainView,StudentInfoView,EnrollmentLookView,
		InqManageView, InqInfoView,InqStuView,InqTchView,InqAprvView,InqAplyView,InqIssView,InqShowView,InqInfoLookView) {
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
			'stusetting.html'       : 'studentSetting',
			'stuinf.html'           : 'studentInf',
			'look.html'             : 'lookstuInf',
			'enrollmentchange.html'         : 'enrollmentChange',
			'maintain.html'         : 'maintainInf',
			'inqmanage.html'        : 'inqmanage',
			'inqinfo.html'          : 'inqinfo',
			'myinq-stu.html'        : 'studentsinq',
			'myinq-tch.html'        : 'teachersinq',
			'myinq-mng.html'        : 'approvalinq',
			'applyinq.html'         : 'applyinq',
			'issueinq.html'         : 'issueinq',
			'inqshow.html'          : 'inqshow',
			'inqinfolook.html'      : 'inqinfolook',
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
		inqmanage : function(){
			new InqManageView({root:$('#bodyContainer')});
		},
		inqinfo : function(){
			new InqInfoView({root:$('#bodyContainer')});
		},
        studentsinq : function(){
            new InqStuView({root:$('#bodyContainer')});
        },
        teachersinq : function(){
            new InqTchView({root:$('#bodyContainer')});
        },
        approvalinq : function(){
            new InqAprvView({root:$('#bodyContainer')});
        },
        applyinq : function(){
            new InqAplyView({root:$('#bodyContainer')});
        },
        issueinq : function(){
            new InqIssView({root:$('#bodyContainer')});
        },
        inqshow : function(){
        	new InqShowView({root:$('#bodyContainer')});
        },
        inqinfolook : function(){
        	new InqInfoLookView({root:$('#bodyContainer')});
        }
	};

	var AppRouter = Backbone.Router.extend(options);
	return AppRouter;
});