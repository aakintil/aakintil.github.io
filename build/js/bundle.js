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
//		this.containerView.content.empty();
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

window.ContentLayout = Backbone.Marionette.LayoutView.extend({

	el: ".layout--content",

	template: JST["views/content/content"],

	regions: {
		"mainContent": ".content--top",
		"supportingContent": ".content--bottom",
	},

	initialize: function (options) {},

	/*
		# View 
	*/

	onRender: function () {
		console.log("wfeafda ", this.supportingContent.$el);

		// apparently you're supposed to call this first? investigate
		// http://stackoverflow.com/questions/10946392/hiding-a-view-in-region-manager-when-another-view-is-shown
		// HACK
		this.supportingContent._ensureElement();
		// to hide the bottom area
		// this.supportingContent.$el.hide();

		//		var _this = this;
		//		setTimeout( function() {
		//			_this.supportingContent.$el.show(); 
		//		}, 2000 )
	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	// "click .toggleSupportingContent" : "toggleSupportingContent"

	/* toggleSupportingContent: {
		on click, 
		- increase the body, html, .layout--content height by 2 or the height of the expanded div. 
		- change the flex grow property of the top and bottom divs
		should work
			1. make element an element again 
			2. increase the height
			3. reveal the element
	}
*/
	// there needs to be an event where 
	// -- TODO -- "on button click, the supportingContent container is visible and grows"
	/*
		# Methods
	*/

});
/*
	# Defines the view for the main layout
*/

window.HeaderLayout = Backbone.Marionette.LayoutView.extend( {

	el: ".header__container",
	
	template: JST["views/header/header"],

	regions: {
		"menu" : ".header__menu",
		"logo" : ".header__logo",
		"navbar" : ".header__navbar",
	},

	initialize: function( options ) {},

	/*
		# View 
	*/

	onRender: function() {
		console.log( "content rendering ", this.regions )
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
	# Defines the view for the main layout
*/

window.MainLayout = Backbone.Marionette.LayoutView.extend({

	el: "body",

	template: JST["views/main/main"],

	regions: {
		"header": ".layout--header",
		"content": ".layout--content",
	},

	initialize: function (options) {},

	/*
		# View 
	*/

	onRender: function () {
		
		// use this as hook for animation 
		// when the main layout renders, render the header & content
		var content = new window.ContentLayout();
		var header = new window.HeaderLayout(); 
		
		header.render();
		content.render();

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