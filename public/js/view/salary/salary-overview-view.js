/**
 * 工资管理模块的view
 * 
 * 
 * **/
define(['underscore', 'backbone', 'resthub', 'hbs!template/salary/salary-overview'],
function(_, Backbone, Resthub, baseTmpl){
  var SalaryOverview = Resthub.View.extend({
    template: baseTmpl,
    
    events: {
    	'click .showSalaryDetail' : 'showSalaryDetail',
    	'click .returnList' : 'returnList'
    },
    
    initialize: function(options) {
    	var _self = this;
		
        _self.render(options);
    },
    
    render : function(options) {
    	var _self = this;
		_self.$el.html(_self.template());

		return _self;
	},
	
	showSalaryDetail : function(){
		var _self = this;
		_self.$el.find('#salaryListShow').hide();
		_self.$el.find('#salaryDetailShow').show();
	},
	
	returnList : function(){
		var _self = this;
		_self.$el.find('#salaryDetailShow').hide();
		_self.$el.find('#salaryListShow').show();
	},
	
	flotEg : function(){
	    //Gold Price
		var data1 = [
		    [1, 1652.21], [2, 1742.14], [3, 1673.77], [4, 1649.69],
		    [5, 1691.19], [6, 1698.76], [7, 1689.90], [8, 1630.31],
		    [9, 1744.81], [10, 1746.58], [11, 1721.64], [12, 1684.76]
		];
		
		var data2 = [
		    [1, 752.21], [2, 712.14], [3, 693.77], [4, 749.69],
		    [5, 721.19], [6, 658.76], [7, 719.90], [8, 730.31],
		    [9, 644.81], [10, 646.58], [11, 691.64], [12, 704.76]
		];
		
		var data3 = [
		    [1, 600], [2, 600], [3, 600], [4, 600],
		    [5, 600], [6, 600], [7, 600], [8, 600],
		    [9, 600], [10, 600], [11, 600], [12, 600]
		];
		 
		var dataset = [
		    { label: "基本工资", data: data1},
		    { label: "住房补贴", data: data2},
		    { label: "班主任津贴", data: data3}
		];
		
        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    radius: 3,
                    fill: true,
                    show: true
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 2,
                borderColor: "#633200",
                backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
            }
        };

		$.plot("#demo-plot",dataset, options);
	}
	
  });
  return SalaryOverview;
});