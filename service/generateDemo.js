var exec = require('child_process').exec,
	fs = require('fs'),
	_ = require('underscore'),
    child;

/**
 * 在demoDist文件夹里，新建与moduleName相同的文件夹
 * **/
var newDir = function (moduleName, cb){
	child = exec('rm -rf ./demoDist/' + moduleName + ' && mkdir ./demoDist/' + moduleName,
		function (error, stdout, stderr) {
		    if (error !== null) {
		      console.log('exec error: ' + error);
	    	}else{
	    		if(!!cb)cb();
	    	}
	    });	
}

/**
 * 将demoTpl中的所有文件复制到./demoDist/moduleName文件夹中
 * **/
var cpFiles = function(moduleName, cb){
	child = exec('cp -a ./demoTpl/webapp ./demoDist/' + moduleName,
		function (error, stdout, stderr) {
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }else{
	    		if(!!cb)cb();
	    	}
		});	
}

/**
 * 循环./demoDist/moduleName文件夹，修改文件名
 * **/
var changeFileName = function(model){
	walkfiles('./demoDist/' + model.moduleName, model);
}

var walkfiles = function(distpath, model){
	var moduleName = model.moduleName;
	var _dirList = fs.readdirSync(distpath);
	
	_dirList.forEach(function(item){
		var oripath = distpath + '/' + item;
		
		if(item.indexOf("xxx") > -1){
			var newpath = oripath.replace("xxx", moduleName);
			fs.renameSync(oripath, newpath);
			if(fs.statSync(newpath).isDirectory()){
				walkfiles(newpath, model);
			}else{
				var contents = fs.readFileSync(newpath);
				
				fs.writeFileSync(newpath, changeFileCode(contents.toString(), {module:model}));
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
	var template = _.template(contents);
	console.log(model);
	return template(model);
}

/**
 * 在demoDist文件夹里，在moduleName文件夹里打一个名为moduleName的zip包
 * 
 * 暂时不用
 * **/
var zipFiles = function (moduleName, cb){
	var _cmd = 'cd ./dist/' + moduleName + ' && zip -r ' + moduleName + '.zip webapp';
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
	var moduleName = model.moduleName; //xxx
	console.log("we will generate module: " + model.moduleName);
	console.log(model.moduleName);
	newDir(model.moduleName, function(){
		cpFiles(model.moduleName, function(){
			changeFileName(model);
			// // zipFiles(model.moduleName,function(){
				// // if(!!cb)cb('/demoDist/' + model.moduleName + '/' + model.moduleName + '.zip');
			// // });
			// if(!!cb)cb();
		})
	});
}

module.exports.generating = generating;
