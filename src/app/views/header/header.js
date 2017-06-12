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

	initialize: function (options) {
		this.pages = this.options.pages;
		window.selectedModel = this.pages.models[0];
	},

	/*
		# View 
	*/

	onRender: function () {
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.pages.models[0]
		});
		//		window.pages = this.pages;
		//		window.content = content;
		window.selectedModel = this.pages.models[0]
		content.render();
	},

	findModel: function (pageTitle) {
		console.log("find model");
	},

	/*
		# Events
	*/

	events: {
		"click .navigation-button": function (event) {
			var _this = this;
			this.toggleNavigation(event, _this)
		},
		//		"click .navigation-button": 'toggleNavigation'
	},

	//			"click .navigation-button": function () {  // have to create a function to pass the headerlayout variable into the events jquery function
	//				var headerLayout = this;
	//				this.toggleNavigation(headerLayout, event);
	//			} //this.toggleNavigation(this.pages)
	/*
		# Methods
	*/

	toggleNavigation: (event, bckbne) => {
		//		console.log("clicking \n", $(event.currentTarget).attr("id"));
		//		console.log('cdaldlfjdskalfjdskl event \n ', event)
		//		console.log("clicking \n", bckbne.trigger);



		//		this.vent.trigger("editMedication", this.model);

		// working---
		var pageTitle = $(event.currentTarget).attr("id");
		window.location.hash = "#/" + pageTitle;

		var pages = bckbne.pages.models;
		var selectedPage = {};
		_.each(pages, function (page) {
			var slug = page.document.slug;
			if (slug === pageTitle) {
				selectedPage = page.document;
			}
		})

		// get the selected model
		//		findModel(pageTitle);
		var mdl = new window.PageModel({}, selectedPage)
		var content = new window.ContentLayout({
			'pages': bckbne.pages,
			'selectedModel': mdl
		});

		var header = new window.HeaderLayout({
			'pages': bckbne.pages,
			'selectedModel': mdl
		});
		window.selectedModel = mdl;
		header.render();

		window.content = content;
		content.render();


		// need to write an event that passes data to the header but doesnn't fully re render it


		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
		// Prevent form from submitting
		//		event.preventDefault();

		// Get the input
		//		var page = $(event.currentTarget).attr("id");

		//		_.each(this.pages.models, function (model) {
		//				console.log("ooifjdklsa;fdsjaklf;asfdjsa")
		//			})
		// Navigate to search page with input
		// window.location.hash = "#/" + page;

		//		console.log(this, " fdklsajfdksla;jfdksl;ajfds;")
	}

});