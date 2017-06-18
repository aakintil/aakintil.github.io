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
		// store the pages variable
		this.pages = this.options.pages;

		// set the home page 
		// TODO --> what happens if someone comes in with aderinsola.com/#/claron....then what?!
		this.homePage = this.pages.models[8];
	},

	/*
		# View 
	*/

	onRender: function () {
		// create a new content layout and pass the necessary parameters: model and collection
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.homePage
		});

		// store the content view
		this.contentView = content;

		// render the content view
		content.render();
	},

	/*
		# Events
	*/

	events: {
		// have to create a function to pass the headerlayout variable into the events jquery function
		"click .navigation-button": function (event) {
			var headerLayout = this;
			this.toggleNavigation(event, headerLayout);
			
			// WHY DON'T WE MOVE TOGGLENAVIGATION into here?
		},
	},

	/*
		# Methods
	*/

	toggleNavigation: (event, bckbne) => {
		// save the page title
		var pageTitle = $(event.currentTarget).attr("id");
		
		// create a new url for it
		window.location.hash = "#/" + pageTitle;

		// loop through the backbone models and find which data is associated with the page click
		var pages = bckbne.pages.models;
		var selectedPage = {};
		_.each(pages, function (page) {
			var slug = page.document.slug;
			if (slug === pageTitle) {
				selectedPage = page; // store the model based on the slug
			}
		});

		bckbne.contentView.updateView(selectedPage);
		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
	}

});