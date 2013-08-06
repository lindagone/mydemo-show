define(['view/codeGena/codeGenerator-view', 'view/codeGena/demoGenerator-view'
        ], function(
		CodeGeneratorView, DemoGeneratorView
		) {
	
	var localoptions = {
		'generateCode.html'     : 'generateCode',
		'generateDemo.html'     : 'generateDemo'
	}
	var localmethod = {
		generateCode : function(){
	    	console.log("into gena code");
			new CodeGeneratorView({root:"#bodyContainer"});
		},
		generateDemo : function(){
			console.log("into gena demo");
			new DemoGeneratorView({root:"#bodyContainer"});
		}
	}
	return {localoptions:localoptions,localmethod:localmethod};
})