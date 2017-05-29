/*
	# Defines the view for the main layout
*/

window.HeaderLayout = Backbone.Marionette.LayoutView.extend({

	el: ".header__container",

	template: JST["views/header/header"],

	regions: {
		"menu": ".header__menu",
		"logo": ".header__logo",
		"navbar": ".header__navbar",
	},

	initialize: function (options) {},

	/*
		# View 
	*/

	onRender: function () {
		//		console.log( "content rendering ", this.regions )
	},

	/*
		# Events
	*/

	events: {
		"click .navigation-button": "toggleNavigation",
	},

	/*
		# Methods
	*/

	toggleNavigation: (event) => {
		console.log("clicking \n", $(event.currentTarget).attr("id"));
		// Prevent form from submitting
		event.preventDefault();

		// Get the input
		var page = $(event.currentTarget).attr("id");
		// Navigate to search page with input
		window.location.hash = "#/" + page;
	}

});