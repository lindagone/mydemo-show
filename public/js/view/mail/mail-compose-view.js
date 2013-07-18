/**
 * 写信的view
 * 支持发送内部邮件和外部邮件
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/mail/mail-compose', 'view/user/user-picker-single-view', 'jquery-plugin'],
function(_, Backbone, Resthub, composeTmpl, UserPickerView){
  var ComposeMailView = Resthub.View.extend({
    template: composeTmpl,
    
    events: {
    	'click .sendMailType a' : 'showMailFrom',
    	'click input[name="mailTo"]' : 'selectMailTo'
    },
    
    initialize: function(options) {
    	var _self = this;
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template(options));
		_.defer(function(){
			_self.$el.find('#compose-textarea').wysihtml5({
		    	"stylesheets": [window.jsRoot + "lib/jquery/bootstrap.wysihtml5/css/wysiwyg-color.css"]
		    });
		});
		return _self;
	},
	
	/**
	 * 选择发送外部邮件时，显示发件人
	 * **/
	showMailFrom : function(e){
		var _self = this;
		var $a = $(e.target).closest('a');
		var $span = _self.$el.find('.mailToStatus');
		var $input = _self.$el.find('.inputMailFrom');
		
		$span.html($a.text());
		($.trim($a.text()) == "外部") ? $input.show():$input.hide();	
	},
	/**
	 * 选择收件人
	 * **/
	selectMailTo : function(e){
		var $input = $(e.target);
		var $modal = $("#selectMailToTest");
		var userpickerView = new UserPickerView({
			cb: function(user){
				$modal.modal('hide');
				$input.val(user.get('fullname'));
			}
		});
		$modal.html(userpickerView.el);
		$modal.modal();
	}
	
  });
  return ComposeMailView;
});