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