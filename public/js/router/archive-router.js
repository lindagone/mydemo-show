define(['view/archive/dangan-index-view','view/archive/dangan-detail-view','view/archive/dangan-look-index-view',
'view/archive/look-detail-view','view/archive/lanmu-index-view','view/archive/newarchive-view'
        ], function(DAIndexView,DAWeiHuDetailView,DALookIndexView,LookDetailView,LanMuIndexView,NewArchiveView) {
	
	var localoptions = {
		'danganweihu.html'     : 'danganweihu',
		'dangandetail.html':'dangandetail',
		'danganlook.html':'lookdangan',
		'dalookdetail.html':'dalookdetail',
		'lanmu.html':'lanmuindex',
		'newarchive.html':'newarchive'
		
	}
	var localmethod = {
		danganweihu : function(){    	
			new DAIndexView({root:"#bodyContainer"});
		},
		dangandetail: function(){    	
			new DAWeiHuDetailView({root:"#bodyContainer"});
		},
		lookdangan: function(){    	
			new DALookIndexView({root:"#bodyContainer"});
		},
		dalookdetail:function(){    	
			new LookDetailView({root:"#bodyContainer"});
		},
		lanmuindex:function(){    	
			new LanMuIndexView({root:"#bodyContainer"});
		},
		newarchive:function(){    	
			new NewArchiveView({root:"#bodyContainer"});
		},
	}
	return {localoptions:localoptions,localmethod:localmethod};
})