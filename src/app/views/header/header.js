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
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.homePage
		});
		this.contentView = content;
		content.render();
	},

	/*
		# Events
	*/

	events: {
		"click .navigation-button": function (event) { // have to create a function to pass the headerlayout variable into the events jquery function
			var headerLayout = this;
			this.toggleNavigation(event, headerLayout);
		},
	},

	/*
		# Methods
	*/

	toggleNavigation: (event, bckbne) => {
		var pageTitle = $(event.currentTarget).attr("id");
		window.location.hash = "#/" + pageTitle;

		var pages = bckbne.pages.models;
		var selectedPage = {};
		_.each(pages, function (page) {
			var slug = page.document.slug;
			if (slug === pageTitle) {
				selectedPage = page;
			}
		});

		bckbne.contentView.updateView(selectedPage);
		// bckbne.contentView.$el.html(bckbne.contentView.template(bckbne.contentView.selectedPage));
		
		
		// need to write an event that passes data to the header but doesn't fully re render it


		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
	}

});