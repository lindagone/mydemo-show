define(['view/archive/dangan-index-view','view/archive/dangan-detail-view','view/archive/dangan-look-index-view'
        ], function(DAIndexView,DAWeiHuDetailView,DALookIndexView) {
	
	var localoptions = {
		'danganweihu.html'     : 'danganweihu',
		'dangandetail.html':'dangandetail',
		'danganlook.html':'lookdangan'
		
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
	}
	return {localoptions:localoptions,localmethod:localmethod};
})