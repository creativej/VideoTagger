/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var ApplicationHomeView = Backbone.View.extend({
	model:appModel,

	el:$("#application .content"),
		
	events: {
		"click .logoutButton":"logout"
	},

	render: function(){
		this.el.html($("#home-template").tmpl());

		this.addAllCategories();

		return this;
	},

	logout: function(){
		this.model.set({loggedIn: false});	
	},

	addCategory: function(category){
		var view = new CategoryView({model:category});
		this.$("ul.categories").append(view.render().el);

		return this;
	},

	addAllCategories: function(){
		categoryCollection.each(this.addCategory);
	}
});

appHomeView = new ApplicationHomeView;