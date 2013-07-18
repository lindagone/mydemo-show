define(['underscore', 'backbone', 'resthub', 'hbs!template/notice/notice-maintain'],
function(_, Backbone, Resthub, maintainItemTmpl){
  var MaintainItemView = Resthub.View.extend({
    template: maintainItemTmpl,
    
    events: {
    	 'click .btn-additem'	: 'addItem',
    	 'click .btn-cancle':'cancleAddItem'
    },
    
    initialize: function() {
    	//console.log('a');
    	//_.bindAll(this, 'render');
    	var _self = this;
        _self.render();
    },
    
    render : function() {
    	var _self = this;
		_self.$el.html(_self.template());
		return _self;
	},
	//添加条目
	addItem:function(){
		var str='<tr id="data1" class="odd gradeX"><td></td><td>'
+'<input type="text" name="noticeLevelName"/></td>'+
  '<td><input type="text" name="noticeInf"/></td>'
 +'<td><button type="button" class="btn btn-mini btn-sure">确定</button><button type="button" class="btn btn-mini btn-cancle">取消</button> </td></tr>' 
	$('#noticelevel').prepend(str);
	},
	//取消添加
	cancleAddItem:function(e){
		$(e.target).parent().parent().remove();
	}
	
  });
  return MaintainItemView;
});