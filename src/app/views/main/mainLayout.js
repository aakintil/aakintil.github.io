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
		console.log("main layout is initialized \n");
		//		this.header.show();
		//		this.model = data.model;
		//		this.collection = data.collection;
	},

	/*
		# View 
	*/

	onRender: function () {
		//		console.log('is it not rendering ', this.header)
		//		var headerView = new window.HeaderLayout({
		//			'model': this.model,
		//			'collection': this.collection
		//		});
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