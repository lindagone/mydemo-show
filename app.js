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
	var codeHandler = require("./service/generateCode").generating;
	codeHandler(req.body, function(zipPath){
		//res.sendfile(app.get("root") + zipPath);
		//console.log(app.get("root") + "/public/img/logo.png");
		res.send(zipPath);
	});	
});
app.get("/download/*",function(req,res){
	
	res.sendfile(app.get("root") + "/" + req.params[0]);
})

app.post("/api/demo", function(req, res){
    res.send("back is ok!");
    // var codeHandler = require("./service/generateCode").generating;
    // codeHandler(req.body, function(zipPath){
        // //res.sendfile(app.get("root") + zipPath);
        // //console.log(app.get("root") + "/public/img/logo.png");
        // res.send(zipPath);
    // }); 
});

app.get('/*', function(req, res){
	res.sendfile(app.get("root") + "/public/index.html");
});


http.createServer(app).listen(app.get('port'), function() {
	console.log("listening: " + app.get('port'));
});

