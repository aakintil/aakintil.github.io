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

	ui: {
		redirect: '.navigation-button'
	},

	initialize: function (options) {
		this.pages = this.options.pages;
		this.homePage = this.pages.models[1];
	},

	/*
		# View 
	*/

	onRender: function () {
		console.log(this.defaultPage);
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.homePage
		});
		//		window.pages = this.pages;
		//		window.content = content;
		//		window.selectedModel = this.pages.models[0]
		content.render();
	},

	findModel: function (pageTitle) {
		console.log("find model");
	},

	/*
		# Events
	*/

	events: {
		// WORKING ---- 
		//		"click .navigation-button": function (event) {
		//			var _this = this;
		//			this.toggleNavigation(event, _this)
		//		},
		// --- 

		//		'click @ui.redirect': 'handleRedirect',
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

		// TODO 
		// I DON'T THINK I'M SETTING THE MODEL CORRECTLY 

		//		header.selectedModel.fetch({
		//			success: function (model, response, options) {
		//				// ...
		//				console.log("fetched")
		//			}
		//		});

		// WORKING -------- 1. 
		// get the selected model
		//		findModel(pageTitle);
		var mdl = new window.PageModel({}, selectedPage);
		console.log(bckbne)
			//		var content = new window.ContentLayout({
			//			'pages': bckbne.pages,
			//			'selectedModel': mdl
			//		});
			//
			//		var header = new window.HeaderLayout({
			//			'pages': bckbne.pages,
			//			'selectedModel': mdl
			//		});

		//		window.selectedModel = mdl;
		//		header.render();
		//
		//		window.content = content;
		//		content.render();
		// ------ 1. 


		//		console.log("\n \n ==================== \n")
		//		console.log(selectedPage)
		//		console.log("\n ==================== \n \n")

		// need to write an event that passes data to the header but doesn't fully re render it


		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
	}

});