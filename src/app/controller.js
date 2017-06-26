/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {
		// none of this is even getting rendered anymore
		//		this.mainLayout = options.containerView;
		//		this.prismicURL = 'https://aderinsola.prismic.io/api';
		//		this.getContentFromPrismic();
	},

	handleRouteIndex: function (routeData) {
		console.log("what")
		// TODO 
		// we have to come back here and set this up properly 
		// Clear the region
		//		this.containerView.content.empty();
		// Init view
		// var view = new window.View();
		// Show  view
		// this.containerView.main.show( view );
	},

	// getter functions

	getContentFromPrismic: function () {
		var _this = this;
		console.log("getting all th edata ");
		Prismic.api(this.prismicURL, function (error, api) {
			api.query("", {}, function (error, response) {
				// Log error
				if (error) console.log("Prismic error: ", error);
				else {
					// console.log("Prismic success, fetching data...", response)
					// Create the model from the Prismic response

					// TODO 
					// ------------------
					// have to figure out how to render the content view from here
					// ------------------

					// create the pages collection with each page inside the object
					var pages = new window.PagesCollection([], response.results);

					console.log("getting all th edata ", _this.options.containerView)
					_this.options.containerView.pages = pages;
					//					 console.error(_this.containerView)
					//
					// var pages = new window.ModelArticlesCollection([], response.results);
					// Init view
					//					var view = new window.ViewHome({
					//						"articles": articles
					//					});
					// Show  view
					// _this.containerView.main.show(view);
				}
			});
		});

	},

	renderPage: function (pageName) {
		//		console.log('calling renderPage function');
	},
	// handleRouteSection : function( section_id ) {

	// 	// Clear the region
	// 	this.containerView.main.empty();
	// 	// Init view
	// 	var view = new window.ViewSection( { "id" : section_id } );
	// 	// Show  view
	// 	this.containerView.main.show( view );
	// },



});