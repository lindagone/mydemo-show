/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-listdetail','view/salary/salary-importbybatch-view'],
function(_, Backbone, Resthub, listdetailTmpl,SalaryImportView){
  var SalaryListDetailView = Resthub.View.extend({
    template: listdetailTmpl,
    
    events: {
    'click #importbybatch':'importByBatch'
    },
    
    initialize: function(options) {
    	var _self = this;	
		//TODO: 默认我最新的一条工资，并展示
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());
		return _self;
	},
	//批量导入,导入界面和工资明细显示在一个界面
	importByBatch:function(){
		$('#detail').hide();
		$('#addNewItems').show();
		new SalaryImportView({root:'#addNewItems'});
	}
	
  });
  return SalaryListDetailView;
});