/*
	# Defines the view for the main layout
*/
window.HeaderLayout = Backbone.Marionette.LayoutView.extend({
// TODO 
	// header layout might have to be a composite view and each 
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
		// *********************
		// we need to do this in the controller *******
		// *********************
		// TODO --> what happens if someone comes in with aderinsola.com/#/claron....then what?!
		this.homePage = this.pages.models[8];

		// testing out a bind all
		//		console.log(this.render)
		//		_.bindAll(this, this.render);
		//		this.pages.models.bind('change', this.render);
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

		// set the class to the appropriate background color for the navbar
		this.$el.find('.header__logo h2').attr("class", content.selectedModel.attributes.category)

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
		console.log('\n on button press: ', selectedPage.attributes.category, '\n')
		bckbne.$el.find('.header__logo h2').attr("class", selectedPage.attributes.category);
		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
	}

});