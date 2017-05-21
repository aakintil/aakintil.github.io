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
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	/*
		# Methods
	*/

});