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
	},

	/*
		# View 
	*/

	onRender: function () {
		//		console.log( "content rendering ", this.regions )
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.pages.models[0]
		});
		window.pages = this.pages;
		window.content = content;
		content.render();
	},

	/*
		# Events
	*/

	events: {
		"click .navigation-button": 'toggleNavigation'
	},

	/*
		# Methods
	*/

	toggleNavigation: (event) => {
		//		console.log("clicking \n", $(event.currentTarget).attr("id"));

		console.log("clicking \n", window.content);

		var content = new window.ContentLayout({
			'pages': window.pages,
			'selectedModel': window.pages.models[1]
		});
		window.content = content;
		var page = $(event.currentTarget).attr("id");
		window.location.hash = "#/" + page;
		content.render();
		
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