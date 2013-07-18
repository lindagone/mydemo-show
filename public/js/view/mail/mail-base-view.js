/**
 * 邮件模块的基础view
 * 邮件所有功能的入口
 * 
 * 1. 查看邮件
 * 2. 写信
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/mail/mail-base', 'view/mail/mail-list-view','view/mail/mail-compose-view'],
function(_, Backbone, Resthub, baseTmpl, MailListView, ComposeMailView){
  var MailBaseView = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .compose-button' : 'composeLetter',
    	'click .receiveMail-button' : 'receiveLetter',
    	'click .social-nav-list a' : 'changeMailContainer'
    },
    
    initialize: function(options) {
    	var _self = this;
		
		//TODO: 默认获取内部邮箱的数据，并展示
        _self.render({boxType: "notTrash"});
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		
		new MailListView({root : _self.$el.find('#mailContainer'), boxType: "notTrash"});
		
		return _self;
	},
	/**
	 * 写信
	 * **/
	composeLetter : function() {
		var _self = this;
		_self.$el.find('.social-nav-list li').removeClass('active');
		
		new ComposeMailView({
			root : _self.$el.find('#mailContainer'),
			mailFromStatus : "hidden" //发送内部邮件，不显示发件人，显示用：show
		});
	},
	/**
	 * 收信，默认选中内部收件箱
	 * **/	
	receiveLetter : function(){
		var _self = this;
		_self.$el.find('.social-nav-list li').removeClass('active');
		_self.$el.find('.social-nav-list li').eq(0).children('a').trigger('click');
	},
	/**
	 * 打开选中的邮箱
	 * **/
	changeMailContainer : function(e){
		var _self = this;
		var $a = $(e.target).closest('a');
		_self.$el.find('.social-nav-list li').removeClass('active');
		$a.parents('li').addClass('active');
		
		if($.trim($a.text()) == "垃圾箱"){
			new MailListView({root : _self.$el.find('#mailContainer'), boxType: "trash"});
		}else{
			//TODO: 实际代码应该发送对应的类型
			new MailListView({root : _self.$el.find('#mailContainer'), boxType: "notTrash"});
		}
		
	}
	
  });
  return MailBaseView;
});