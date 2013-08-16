define(['view/studentmanage/setting-studentstatus-view','view/studentmanage/enrollmentmaintain-view',
		 'view/studentmanage/setstudentInfo-view','view/studentmanage/look-enrollment-view','view/studentmanage/namelist-view',
		 'view/studentmanage/look-inf-view','view/studentmanage/improve-inf-view',
        ], function(StudentSettingView,EnrollmentChangeMaintainView,StudentInfoView,EnrollmentLookView,
		NameListView,LookInfView,ImproveInfoView	
		) {
	
	var localoptions = {
			'stusetting.html'       : 'studentSetting',
			'stuinf.html'           : 'studentInf',
			'look.html'             : 'lookstuInf',
			'namelist.html'         : 'nameList',
			'lookinf.html'          : 'lookInf',
			'stuimprove.html'       : 'stuImproveInf',
			'enrollmentchange.html'         : 'enrollmentChange',
	}
	var localmethod = {
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
	}
	return {localoptions:localoptions,localmethod:localmethod};
})