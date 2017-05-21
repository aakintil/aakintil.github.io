/*
	# Defines the collection for models
*/

window.Collection = Backbone.Collection.extend({
    model: window.Model,

    initialize: function (array, PrismicDataArray) {
        // 
        this.prismicDataArray = PrismicDataArray;

        // For each Document
        _.each(PrismicDataArray, function (document) {
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