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

	initialize: function (data) {

		this.collection.each(function (page) {
			//			console.log((page))
		});
		//		console.log('initializing the main layout view ', this.collection.get("about"))
		//		this.pages = options.pages;
		//		var header = new window.HeaderLayout({
		//			'pages': this.pages
		//		});
		//		header.render();
	},

	/*
		# View 
	*/

	onRender: function () {
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