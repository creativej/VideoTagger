/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var ApplicationView = Backbone.View.extend({
	model:appModel,
	el:$("#application"),

	initialize: function(){
		this.model.bind("change:loggedIn", this.handleLogin, this);

		this.showLoginView();

		categoryCollection.fetch();
	},

	handleLogin: function(model, loggedIn)
	{
		if(loggedIn){
			this.showHomeView();
		}else{
			this.showLoginView();
		}
	},

	showHomeView: function() {
		appHomeView.render();
		this.el.attr('class', 'loggedIn');
	},

	showLoginView: function(){
		appLoginView.render();
		this.el.attr('class', 'index');		
	},

	/*********** Utility functions ***********/
	getContent:function(){
		return $('#application .content');
	},
});