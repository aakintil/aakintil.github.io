/*
	# Defines the collection for models
*/

window.PagesCollection = Backbone.Collection.extend({
    model: window.PageModel,

    initialize: function (array, PrismicDataArray) {
        this.prismicData = PrismicDataArray;
        // For each Document
        _.each(this.prismicData, function (page) {
            // Create a new Document Model
            var a = new window.PageModel({}, page);

            // Add it to this collection
            array.push(a);
        }.bind(this));
        
    },

    /*
    	#	Methods
    */




});