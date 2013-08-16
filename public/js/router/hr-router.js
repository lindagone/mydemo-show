define(['view/hr/hr-index-view','view/hr/personview-index-view',
         'view/hr/hrmanage-index-view','view/hr/teachersearch-view','view/hr/setting-teacherstatus-view',
         'view/hr/improve-teacherinf-view','view/hr/setTeacherInfo-view',
        ], function(HrIndexView,PersonViewIndexView,HrManageIndexView,TeacherSearchView,TeacherSettingView,
        	TeaInfImproveView,MaintainIndexView
		) {
	
	var localoptions = {
		    'hr.html'               : 'hrFunctionManage',
			'personview.html'       : 'personView',
			'hrmanage.html'         : 'hrManage',
			'teachersearch.html'    : 'teacherSearch',
			'setting.html'          : 'teacherSetting',
			'improve.html'          : 'infImprove',
			'maintain.html'         : 'maintainInf'
	}
	var localmethod = {
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
	}
	return {localoptions:localoptions,localmethod:localmethod};
})