/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend( {

	initialize: function( options ) {},

	start: function( options ) {

		// Assign data
		// window.DataModel = new window.ModelData( options.data );

		// Render the main view
		this.rootView.render();

		// Start the history keeping
		Backbone.history.start();
	}

});

/*
	# The main entry point of the app
*/

// Init an app instance
var App = new window.Application();

$(document).ready( function() {

	// Load Data
	// $.getJSON( "./js/data.json").done( function( data ) {

		// Init the main view
		App.rootView = new window.MainLayout();

		// Init router
		var Controller = new window.Controller( { containerView: App.rootView } );
		var Router = new window.Router( { controller: Controller, containerView: App.rootView } );

		// Start the app
		// App.start( { "data": data } );
		App.start( {} );

	// });

});

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
/*
	# Defines the main router
*/

window.Router = Backbone.Marionette.AppRouter.extend( {

	initialize: function( options ) {

		var containerView = options.containerView;
		
	},

	appRoutes: {
		"(/)"								: "handleRouteIndex",
		// "section/:id" 					: "handleRouteSection",
	}

});
/*
	# Defines the collection for models
*/

window.Collection = Backbone.Collection.extend(
{
	model: window.Model,

	initialize: function( array )
	{
		// 
	},

	/*
		#	Methods
	*/

	


});
/*
	# Defines the data model for
*/

window.Model = Backbone.Model.extend( {

	initialize: function( data )
	{
		// 
	},

	/*
		#	Methods
	*/

	

});
/*
	# Defines the view for the main layout
*/

window.MainLayout = Backbone.Marionette.LayoutView.extend( {

	el: "body",
	
	template: JST["views/main/main"],

	regions: {
		"main" : "#main",
	},

	initialize: function( options ) {},

	/*
		# View 
	*/

	onRender: function() {

	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	/*
		# Methods
	*/

});
/*
	# Defines the view that 
*/

window.ViewCompositeViewItem = Backbone.Marionette.ItemView.extend(
{
	className: "cv__item",
	template: JST["views/common/compositeView/compositeView_item"],

	initialize: function( options ) 
	{
		// 
	},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});

/*
	# Defines the view that
*/

window.ViewCompositeView = Backbone.Marionette.CompositeView.extend(
{
	
	template: JST["views/common/compositeView/compositeView"],
	childView: window.ViewCompositeViewItem,
	childViewContainer: ".cv__container",

	initialize: function( options ) {},
	/*
		# View 
	*/

	onRender: function() {},

	

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});
/*
	# Defines the view for 
*/

window.ViewPage = Backbone.Marionette.ItemView.extend( {
	
	template: JST["views/pages/page/page"],

	initialize: function( options ) {},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});