var exec = require('child_process').exec,
	fs = require('fs'),
	handlebar = require('handlebars'),
    child;

/**
 * 在dist文件夹里，新建与className相同的文件夹
 * **/
var newDir = function (className, cb){
	child = exec('rm -rf ./dist/' + className + ' && mkdir ./dist/' + className,
		function (error, stdout, stderr) {
		    if (error !== null) {
		      console.log('exec error: ' + error);
	    	}else{
	    		if(!!cb)cb();
	    	}
	    });	
}

/**
 * 将template中的所有文件复制到./dist/className文件夹中
 * **/
var cpFiles = function(className, cb){
	child = exec('cp -a ./template/webapp ./dist/' + className,
		function (error, stdout, stderr) {
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }else{
	    		if(!!cb)cb();
	    	}
		});	
}

/**
 * 循环./dist/className文件夹，修改文件名
 * **/
var changeFileName = function(model){
	walkfiles('./dist/' + model.className, model);
}

var walkfiles = function(distpath, model){
	var className = model.className;
	var ClassName = model.ClassName;
	var _dirList = fs.readdirSync(distpath);
	
	_dirList.forEach(function(item){
		var oripath = distpath + '/' + item;
		
		if(item.indexOf("Xxx") > -1){
			var newpath = oripath.replace("Xxx", ClassName);
			fs.renameSync(oripath, newpath);
			
			if(fs.statSync(newpath).isDirectory()){
				walkfiles(newpath, model);
			}
			
		}else if(item.indexOf("xxx") > -1){
			var newpath = oripath.replace("xxx", className);
			fs.renameSync(oripath, newpath);
			if(fs.statSync(newpath).isDirectory()){
				walkfiles(newpath, model);
			}else{
				var contents = fs.readFileSync(newpath);
				fs.writeFileSync(newpath, changeFileCode(contents.toString(), model));
			}
			
		}else{
			
			if(fs.statSync(oripath).isDirectory()){
				walkfiles(oripath, model);
			}
		}
	});
}

/**
 * 修改模板文件的内容，填充各属性
 * **/
var changeFileCode = function(contents, model){
	var template = handlebar.compile(contents);
	return template(model);
}

/**
 * 在dist文件夹里，在className文件夹里打一个名为className的zip包
 * **/
var zipFiles = function (className, cb){
	var _cmd = 'cd ./dist/' + className + ' && zip -r ' + className + '.zip webapp';
	child = exec(_cmd,
		function (error, stdout, stderr) {
		    if (error !== null) {
		      console.log('exec error: ' + error);
	    	}else{
	    		if(!!cb)cb();
	    	}
	    });	
}

function generating(model,cb){
	var className = model.className; //xxx
	var ClassName = className.substring(0,1).toUpperCase() + className.substring(1); // Xxx
	model.ClassName = ClassName;
	console.log("we will generate class: " + model.className);
	newDir(model.className, function(){
		cpFiles(model.className, function(){
			changeFileName(model);
			zipFiles(model.className,function(){
				if(!!cb)cb('/dist/' + model.className + '/' + model.className + '.zip');
			});
			
		})
	});
}

module.exports.generating = generating;
