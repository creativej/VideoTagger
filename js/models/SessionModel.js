/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var SessionModel = Backbone.Model.extend({
	default: {
		sessionId: "",
		username: "",
		password: "",
		userid: "",
	},

	isAthorized: function(){
		return Boolean(this.get("sessionId"));
	}
});

activeSession = new SessionModel;