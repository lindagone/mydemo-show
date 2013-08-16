define(['view/lcj/lcj-view'
        ], function(
        	
			 LcjView
		) {
	
	var localoptions = {
		 'lcj.html' : 'lcj'
	}
	var localmethod = {
		lcj : function(){
        	new LcjView({root:$('#bodyContainer')});
        }
	}
	return {localoptions:localoptions,localmethod:localmethod};
})