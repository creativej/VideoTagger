/**
 * User: jamison
 * Date: 7/08/11
 * Time: 9:27 PM
 */
var CategoryCollection = Backbone.Collection.extend({
	model:CategoryModel,

	url:"video_categories.php",

	parse: function(response) {
		alert(response);
		return response.results;
	}
});

window.categoryCollection =  new CategoryCollection;


// categoryCollection.add();
// categoryCollection.create({id:2, name:"locking"});
// categoryCollection.create({id:3, name:"breaking"});
