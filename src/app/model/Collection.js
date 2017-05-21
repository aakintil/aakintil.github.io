/*
	# Defines the collection for models
*/

window.Collection = Backbone.Collection.extend({
    model: window.PageModel,

    initialize: function (array, PrismicDataArray) {
        // 
        this.prismicDataArray = PrismicDataArray;

        console.log('------------- \n', PrismicDataArray, '\n------------- \n');
//        console.log('------------- \n', PrismicDataArray.getStructuredText('project-pages.title').asHtml(), '\n------------- \n');
        // For each Document
        _.each(this.prismicDataArray, function (document) {
            // Create a new Document Model
            var a = new window.PageModel({}, document);

            // Add it to this collection
            array.push(a);

        }.bind(this));
    },

    /*
    	#	Methods
    */




});