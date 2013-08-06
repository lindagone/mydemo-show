define(['view/inqmanage/report1-view',        'view/inqmanage/report2-view',    'view/inqmanage/report3-view',   'view/inqmanage/report4-view',     'view/inqmanage/report5-view',
         'view/inqmanage/report6-view',        'view/inqmanage/report7-view',    'view/inqmanage/inqmanage-view', 'view/inqmanage/inqinfo-view',     'view/inqmanage/inqinfo2-view',
         'view/inqmanage/inqinfo-yxb-view',    'view/inqmanage/myinq-stu-view',  'view/inqmanage/myinq-tch-view', 'view/inqmanage/myinq-mng-view',   'view/inqmanage/opening-view', 
         'view/inqmanage/closing-view',        'view/inqmanage/report-tch-view', 'view/inqmanage/QHopening-view', 'view/inqmanage/QHclosing-view',   'view/inqmanage/QHreport1-view', 
         'view/inqmanage/QHgroup-view',        'view/inqmanage/issueinq-view',   'view/inqmanage/showinq-view',   'view/inqmanage/inqinfolook-view', 'view/inqmanage/inqinfolook-tch-view',
         'view/inqmanage/inqinfolook-yxb-view','view/inqmanage/inqinfolook-cwh-view', 'view/inqmanage/inqinfolook-admin-view'
        ], function(
        	
			 InqReport1View, InqReport2View,   InqReport3View, InqReport4View,  InqReport5View,
			 InqReport6View, InqReport7View,   InqManageView,  InqInfoView,     InqInfo2View, 
			 InqInfoYxbView, InqStuView,       InqTchView,     InqAprvView,     InqOpeningView, 
			 InqClosingView, InqReportTchView, QHopeningView,  QHclosingView,   QHactivityView,
			 QHgroupView,    InqIssView,       InqShowView,    InqInfoLookView, InqInfoLookTchView, 
			 InqInfoLookYxbView, InqInfoLookCwhView, InqInfoLookAdminView
		) {
	
	var localoptions = {
		 'report1.html' : 'report1',
		 'report2.html' : 'report2',
		 'report3.html' : 'report3',
		 'report4.html' : 'report4',
		 'report5.html' : 'report5',
		 'report6.html' : 'report6',
		 'report7.html' : 'report7',
		 'inqmanage.html'        : 'inqmanage',
		 'inqinfo.html'          : 'inqinfo',
		 'inqinfo2.html'         : 'inqinfo2',
         'inqinfoyxb.html'       : 'inqinfoyxb',
		 'myinq-stu.html'        : 'studentsinq',
		 'myinq-tch.html'        : 'teachersinq',
		 'myinq-mng.html'        : 'approvalinq',
		 'InqOpeningView.html'   : 'InqOpening',
		 'InqClosingView.html'   : 'InqClosing',
		 'reportTch.html'        : 'reportTch',
		 'issueinq.html'         : 'issueinq',
		 'inqshow.html'          : 'inqshow',
		 'inqinfolook.html'      : 'inqinfolook',
		 'inqinfolooktch.html'   : 'inqinfolooktch',
		 'inqinfolookyxb.html'   : 'inqinfolookyxb',
		 'inqinfolookcwh.html'   : 'inqinfolookcwh',
		 'inqinfolookadmin.html' : 'inqinfolookadmin',
		 'QHopening.html'        : 'QHopening',
		 'QHclosing.html'        : 'QHclosing',
		 'QHactivity.html'       : 'QHactivity',
		 'QHgroup.html'          : 'QHgroup'
	}
	var localmethod = {
		report1 : function(){
        	new InqReport1View({root:$('#bodyContainer')});
        },
        report2 : function(){
        	new InqReport2View({root:$('#bodyContainer')});
        },
        report3 : function(){
        	new InqReport3View({root:$('#bodyContainer')});
        },
        report4 : function(){
        	new InqReport4View({root:$('#bodyContainer')});
        },
        report5 : function(){
        	new InqReport5View({root:$('#bodyContainer')});
        },
        report6 : function(){
        	new InqReport6View({root:$('#bodyContainer')});
        },
        report7 : function(){
        	new InqReport7View({root:$('#bodyContainer')});
        },
        inqmanage : function(){
			new InqManageView({root:$('#bodyContainer')});
		},
		inqinfo : function(){
			new InqInfoView({root:$('#bodyContainer')});
		},
		inqinfo2 : function(){
			new InqInfo2View({root:$('#bodyContainer')});
		},
		inqinfoyxb : function(){
		    new InqInfoYxbView({root:$('#bodyContainer')});
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
        InqOpening : function(){
            new InqOpeningView({root:$('#bodyContainer')});
        },
        InqClosing : function(){
            new InqClosingView({root:$('#bodyContainer')});
        },
        reportTch : function(){
        	new InqReportTchView({root:$('#bodyContainer')});
        },
        issueinq : function(){
            new InqIssView({root:$('#bodyContainer')});
        },
        inqshow : function(){
        	new InqShowView({root:$('#bodyContainer')});
        },
        inqinfolook : function(){
        	new InqInfoLookView({root:$('#bodyContainer')});
        },
        inqinfolooktch : function(){
        	new InqInfoLookTchView({root:$('#bodyContainer')});
        },
        inqinfolookyxb : function(){
        	new InqInfoLookYxbView({root:$('#bodyContainer')});
        },
        inqinfolookcwh : function(){
            new InqInfoLookCwhView({root:$('#bodyContainer')});
        },
        inqinfolookadmin: function(){
            new InqInfoLookAdminView({root:$('#bodyContainer')});
        },
        QHopening : function(){
        	new QHopeningView({root:$('#bodyContainer')});
        },
        QHclosing : function(){
        	new QHclosingView({root:$('#bodyContainer')});
        },
        QHactivity : function(){
        	new QHactivityView({root:$('#bodyContainer')});
        },
        QHgroup : function(){
        	new QHgroupView({root:$('#bodyContainer')});
        }
	}
	return {localoptions:localoptions,localmethod:localmethod};
})