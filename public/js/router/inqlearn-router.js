define(['view/inqLearn/student/stu-index-view','view/inqLearn/student/stu-xuantibase-view','view/inqLearn/student/newxuanti-view',
        'view/inqLearn/student/ketilist-view','view/inqLearn/student/kaitidetail-view','view/inqLearn/student/comment-view',
        'view/inqLearn/student/kaitibaogao-view', 'view/inqLearn/student/jietibaogao-view','view/inqLearn/student/ziliao-view'
        ,'view/inqLearn/student/diaocha-view','view/inqLearn/teacher/tea-index-view','view/inqLearn/yanxueban/yx-index-view',
        'view/inqLearn/yanxueban/kaitishenhe-view','view/inqLearn/yanxueban/jietishenhe-view','view/inqLearn/yanxueban/jieti-index-view',
        'view/inqLearn/yanxueban/kaiti-score-view','view/inqLearn/yanxueban/jieti-score-view','view/inqLearn/yanxueban/delete-wuxiao-view',
        'view/inqLearn/yanxueban/modify-view','view/inqLearn/yanxueban/guide-teacher-view','view/inqLearn/yanxueban/setting-stu-view',
        'view/inqLearn/yanxueban/notchoosekt-view','view/inqLearn/yanxueban/quanzhong-view','view/inqLearn/yanxueban/issue-resource-view',
        'view/inqLearn/yanxueban/ktresource-view','view/inqLearn/yanxueban/ktdetail-view','view/inqLearn/yanxueban/look-resource-view'], 
        function(StuIndexView,xuantiBaseView,EditBaseView,KetiListView,KaitiDetailView,CommentView,KaitiBaogaoView,JietiBaogaoView
,ZiLiaoView,DiaoChaView,TeaIndexView,YXIndexView,KaitiSHView,JietiSHView,JietiIndexView,KaiTiScoreView,JieTiScoreView,
ShanChuView,ModifyView,GuideTeaView,StuSettingView,NotChooseKTView,QuanZhongView,IssueResourceView,ktResourceView,ktLookDetailView,LookResourceView) {
	
	var localoptions = {
		'stuindex.html'     : 'stuIndex',
		'xuantibase.html'   :'xuantiBase',
		'editbase.html'    :'editBase',
		'ketilist.html'    :'ketiList',
		'kaitiabove.html'   :'kaitiAbove',
		'comment.html'     :'comment',
		'kaitibaogao.html' :'kaitiBaogao',
		'jietibaogao.html' :'jietiBaogao',
		'ziliao.html':'ziLiao',
		'diaocha.html':'diaocha',
		'teaindex.html':'teaIndex',
		'yxindex.html':'yxIndex',
		'kaitishenhe.html':'kaitishenhe',
		'jietishenhe.html':'jietishenhe',
		'jietiindex.html':'jietiindex',
		'kaitiscore.html':'kaitiScore',
		'jietiscore.html':'jietiScore',
		'shanchu.html':'shanChu',
		'modify.html':'modify',
		'guideteacher.html':'guideTeacher',
		'studentsetting.html':'stuSetting',
		'notchoose.html':'notChoose',
		'quanzhong.html':'quanzhong',
		'resource.html':'issueResource',
		'ktresource.html':'ktResource',
		'lookdetail.html':'lookdetail',
		'lookresource.html':'lookresource'
	}
	var localmethod = {
		stuIndex : function(){    	
			new StuIndexView({root:"#bodyContainer"});
		},
		xuantiBase:function(params){
			// if(!params  &&  location.search){
				// params = parseQueryString(window.location.search.substring(1));
			// }
			// new xuantiBaseView({root:"#bodyContainer",'currentuser':params.type});
			 new xuantiBaseView({root:"#bodyContainer"});
		},
		editBase:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			}
			
			new EditBaseView({root:"#bodyContainer",'currentpos':params.type});
		},
		ketiList:function(){
			new KetiListView({root:"#bodyContainer"});
		},
		kaitiAbove:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			}
			new KaitiDetailView({root:"#bodyContainer",'currentuser':params.type});
		},
		comment:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
				new CommentView({root:"#bodyContainer",'currentuser':params.type});
			}else{
				new CommentView({root:"#bodyContainer"});
			}
			
		},
		kaitiBaogao:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			}
			new KaitiBaogaoView({root:"#bodyContainer",'currentuser':params.type});
		},
		jietiBaogao:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			}
			new JietiBaogaoView({root:"#bodyContainer",'currentuser':params.type});
		},
		ziLiao:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
				new ZiLiaoView({root:"#bodyContainer",'currentuser':params.type});
			}else{
				new ZiLiaoView({root:"#bodyContainer"});
			}
			
		},
		diaocha:function(params){
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
			new DiaoChaView({root:"#bodyContainer",'currentuser':params.type});
			}else{
				new DiaoChaView({root:"#bodyContainer"});
			}
			
		},
		teaIndex: function(){    	
			new TeaIndexView({root:"#bodyContainer"});
		},
		yxIndex: function(){    	
			new YXIndexView({root:"#bodyContainer"});
		},
		kaitishenhe: function(){    	
			new KaitiSHView({root:"#bodyContainer"});
		},
		jietishenhe: function(params){  
			if(!params  &&  location.search){
				params = parseQueryString(window.location.search.substring(1));
				new JietiSHView({root:"#bodyContainer",'currentpos':params.type});
			}else{
				new JietiSHView({root:"#bodyContainer"});
			}  	
			
		},
		jietiindex: function(){    	
			new JietiIndexView({root:"#bodyContainer"});
		},
		kaitiScore: function(){    	
			new KaiTiScoreView({root:"#bodyContainer"});
		},
		jietiScore: function(){    	
			new JieTiScoreView({root:"#bodyContainer"});
		},
		shanChu: function(){    	
			new ShanChuView({root:"#bodyContainer"});
		},
		modify: function(){    	
			new ModifyView({root:"#bodyContainer"});
		},
		guideTeacher: function(){    	
			new GuideTeaView({root:"#bodyContainer"});
		},
		stuSetting: function(){    	
			new StuSettingView({root:"#bodyContainer"});
		},
		notChoose:function(){    	
			new NotChooseKTView({root:"#bodyContainer"});
		},
		quanzhong:function(){    	
			new QuanZhongView({root:"#bodyContainer"});
		},
		issueResource:function(){    	
			new IssueResourceView({root:"#bodyContainer"});
		},
		ktResource:function(){    	
			new ktResourceView({root:"#bodyContainer"});
		},
		lookdetail:function(){    	
			new ktLookDetailView({root:"#bodyContainer"});
		},
		lookresource:function(){    	
			new LookResourceView({root:"#bodyContainer"});
		},
	}
	return {localoptions:localoptions,localmethod:localmethod};
})