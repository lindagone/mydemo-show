define(['underscore', 'resthub', 'und!template/picture/pic-index'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		treedata:null,
		events : {
			
			
		},

		initialize : function(options) {
			var _self = this;
			
			
			_self.render();
			
		},

		render : function(data) {
			var _self = this;			
			_self.$el.html(_self.template());
			this.initTree();
			
			return _self;
		},
		initTree : function() {
			var setting = {
					view : {
						showIcon : true
					},
					callback:{
						onClick:this.oper
					},
					async: {
				enable: true,
				url:'/api/getpicturename',
				type:'GET',
				dataFilter: this.filter
			}
					
			};
		
			  var zNodes=[
           {name: "成果",open:true,children:
          [
           {name:'1-0展示区'},{name:'1-1北师大附属中学三地远程智能教室'},
           {name:'1-2宁夏六盘山高级中学远程互动教学'}
            
          ]
          }       
			            ];         
			$.fn.zTree.init($("#piclist"), setting);
			

		},
		oper:function(e,treeId,treeNode){
			var str="/img/picshow/1优秀成果/"+treeNode.name;
			$('#picname').attr('src',str);
			//alert(treeNode.name)
			
			
		},
	 filter:function(treeId, parentNode, childNodes) {
			//console.log(parentNode+" ,childNodes  "+JSON.stringify(childNodes));
			return childNodes;
		}
		
		
		
	});
	return ModuleView;
	
});
