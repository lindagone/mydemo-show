define(['underscore', 'resthub', 'und!template/{{className}}/{{className}}List'], 
function(_, Resthub, template) {
	var ListView = Resthub.View.extend({
		
		template : template,
		
		page : null,
		
		events : {
			"click button.btn-delete" : "deleteItem"
		},

		initialize : function(options) {
			var _self = this;
			_self.page = (!!options.page)? options.page : 1;
			$.ajax({
				url : window.contextBase + "/api/{{className}}",
				data : {page:_self.page}
			}).done(function(data){
				_self.render(data);
			})
		},

		render : function(data) {
			var _self = this;
			if (data.content){//pagination goes here
				if (data.content.length===0 && data.totalPages!==0){
					window.approuter.navigate("/{{className}}?page=" + data.totalPages,{trigger:"true"});
				}else{
					if(data.totalPages===0){
						var options = {
					            currentPage: _self.page,
					            totalPages: _self.page,
					            size: "small",
					            alignment: "right",
					            onPageClicked: function(e,originalEvent,type,page){
					            	var _url = "/{{className}}?page=" + page;
					            	window.approuter.navigate(_url,{trigger:"true"});
					            }
						};
					}else{
						var options = {
					            currentPage: Math.min(_self.page,data.totalPages),
					            totalPages: data.totalPages,
					            size: "small",
					            alignment: "right",
					            onPageClicked: function(e,originalEvent,type,page){
					            	var _url = "/{{className}}?page=" + page;
					            	window.approuter.navigate(_url,{trigger:"true"});
					            }
						};
					}
					_self.$el.html(_self.template({{className}}s:data.content}));
					_.defer(function() {
				        _self.$el.find('.pagination').bootstrapPaginator(options);
				     });
				}
			}else{// no pagination
				_self.$el.html(_self.template({{className}}s:data}));
			}

			return _self;
		},
		
		deleteItem : function(e){
			var _self = this;
			var {{className}}Id = $(e.target).closest('td').attr('data-{{className}}Id');
			
			$.ajax({
				type:"DELETE",
				url:window.contextBase + "/api/{{className}}/"+ {{className}}Id
			}).done(function(){
				window.globalNotify({
					type:"success",
					htmlContent:"删除成功！",
					cb:function(){window.location.reload();}
				});
			});
		}
		
	});
	return ListView;
}); 