var express = require('express')
	, app = express()
	, http = require('http');

app.set('port', process.env.PORT || 3001);
app.set("root",__dirname);
app.use(express.bodyParser({
	uploadDir: __dirname + '/public/tmp',
    keepExtensions: true
}));
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));

app.post("/api/code", function(req, res){
	console.log(req.body);
	var codeHandler = require("./service/generateCode").generating;
	codeHandler(req.body, function(){
		res.send("OK");
	});	
});
app.get('/*', function(req, res){
	res.sendfile(app.get("root") + "/public/index.html");
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("listening: " + app.get('port'));
});

