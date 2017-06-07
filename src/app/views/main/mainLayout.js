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

	initialize: function (options) {
		console.log('main layout this object ', this)
		this.pages = options.pages;
	},

	/*
		# View 
	*/

	onRender: function () {

		var header = new window.HeaderLayout({
			'pages': this.pages
		});
		var content = new window.ContentLayout({
			'pages': this.pages
		});
		header.render();
		content.render();

		// use this as hook for animation 
		// when the main layout renders, render the header & content
		//		var header = new window.HeaderLayout(); 
		//		header.render();
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