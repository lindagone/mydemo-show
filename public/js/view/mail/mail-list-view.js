/**
 * 邮箱列表的view
 * 收件箱、发件箱、草稿箱、垃圾箱都要重用
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/mail/mail-list', 'view/mail/mail-read-view', 'jquery-plugin'],
function(_, Backbone, Resthub, listMailTmpl, readMailView){
  var MailListView = Resthub.View.extend({
    template: listMailTmpl,
   
    events: {
    	'click .mailFilter a'     : 'getMailFilter',
    	'click .mailPageFilter a' : 'getMailPageFilter',
    	'click .readMail'         : 'readMail'
    },
    
    initialize: function(options) {
    	var _self = this;
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template(options));
		
		return _self;
	},
	/**
	 * 查看邮件：已读/未读、有/无附件、普通/回执邮件
	 * **/
	getMailFilter : function(e){
		var _self = this;
		var $a = $(e.target).closest('a');
		var $span = _self.$el.find('.mailStatus');
		$span.html($a.text());
	},
	/**
	 * 自定义分页列表，每页10，20，30，40，50封
	 * **/
	getMailPageFilter : function(e){
		var _self = this;
		var $a = $(e.target).closest('a');
		var $span = _self.$el.find('.pageStatus');
		$span.html($a.text());
	},
	/**
	 * 阅读一封邮件
	 * **/
	readMail : function(e){
		var _self = this;
		console.log("I wanna read this mail");
		new readMailView({root: $('#mailContainer')});
	}
	
	
  });
  return MailListView;
});