/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend( {

	initialize: function( options ) {

		this.containerView = options.containerView;
		
	},

	handleRouteIndex : function( routeData ) {

		// Clear the region
		this.containerView.main.empty();
		// Init view
		// var view = new window.View();
		// Show  view
		// this.containerView.main.show( view );
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