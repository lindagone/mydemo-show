define(['underscore', 'resthub', 'und!template/archive/newarchive'], 
function(_, Resthub, template) {
	var ModuleView = Resthub.View.extend({
		
		template : template,
		
		events : {
			'click #lanmu':'lanmu',
			'click .addfj':'addfj',
			'click .scfj':'scfj'
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
		lanmu:function(e){
			$('#myModal').modal();
		},
		initTree : function() {
			var setting = {
					view : {
						showIcon : true
					},
					callback:{
						//onClick:this.oper
					}
			};
			
			  var zNodes=[
           {name: "学生档案",open:true,children:[
            {name:'优秀学生'},{name:'普通学生'}
            
           ]} , {name:'教师档案',children:[
            {name:'优秀教师'},{name:'普通教师'}]}, {name:'医疗档案',children:[
            {name:'教师医疗档案'},{name:'学生医疗档案'}]}      
			          ];         
			$.fn.zTree.init($("#deptlist"), setting, zNodes);
			
		},
		addfj:function(){
			$('.scfj').show();
			$('.addfj').hide();
		},
		scfj:function(){
			$('.scfj').hide();
			$('.addfj').show();
		}
		
	});
	return ModuleView;
}); 