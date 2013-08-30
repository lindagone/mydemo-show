var fs = require('fs'),
   _ = require('underscore'),
   util = require('util'),
   arr=[];
   var str;
function getfileName(model){
	var dir='./public/img/picshow/1优秀成果';
	
	var str=fs.readdirSync(dir);
	
	_.each(str,function(element, index, list){
	
	arr.push({'name':element});
		
	});
	console.log(arr);
	return arr;
	
};
 

module.exports.getfileName=getfileName();