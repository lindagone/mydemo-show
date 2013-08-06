define(['view/salary/mysalary-view', 'view/salary/salary-manage-view', 'view/salary/salary-initialize-view', 'view/salary/salary-accountmanage-view','view/salary/salary-overview-view'
        ], function(
        		MysalaryView, SalaryManageView, SalaryInitView, AccountManageView, SalaryOverview
		) {
	
	var localoptions = {
		'mysalary.html'         : 'mysalary',
		'salarymanager.html'	: 'salarymanager',
		'salaryinit.html'       : 'salaryinit',
		'accountmanager.html'   : 'accountmanager',
		'salaryoverview.html' 	: 'salaryoverview'
	}
	var localmethod = {
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
		}
	}
	return {localoptions:localoptions,localmethod:localmethod};
})