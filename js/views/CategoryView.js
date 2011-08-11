/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var CategoryView = Backbone.View.extend({
	tagName: "li",

	events: {
		"click":"tag"
	},

	render: function(){
		$(this.el).text(this.model.get('name'));

		return this;
	},

	tag: function(){
		console.log(this.model.get('name')+" tagged");
	}
});
