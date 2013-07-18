var express = require('express');
var app = express();

var port  = process.env.PORT || 3001;

app.set('port', port);
app.set("root",__dirname);

app.use(express.static(__dirname + '/public'));

app.post("/api/code", function(req, res){
	var codeHandler = require("../service/generateCode").generating;
	codeHandler(req.body, function(){
		res.send("OK");
	});	
});
app.get('/*', function(req, res){
	res.sendfile(app.get("root") + "/public/index.html");
});

app.listen(port);
console.log("Listening on port " + port);
