/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var ApplicationLoginView = Backbone.View.extend({
	model:appModel,
	el:$("#application .content"),

	events: {
		"click .loginButton":"login"
	},

	initialize: function(){

	},

	render: function(){
		this.el.html($("#login-template").tmpl());

		return this;
	},

	login: function(){
		this.model.set({loggedIn: true});
	},
});

appLoginView = new ApplicationLoginView;