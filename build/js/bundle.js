/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend( {

	initialize: function( options ) {},

	start: function( options ) {

		// Assign data
		// window.DataModel = new window.ModelData( options.data );

		// Render the main view
		this.rootView.render();

		// Start the history keeping
		Backbone.history.start();
	}

});

/*
	# The main entry point of the app
*/

// Init an app instance
var App = new window.Application();

$(document).ready( function() {

	// Load Data
	// $.getJSON( "./js/data.json").done( function( data ) {

		// Init the main view
		App.rootView = new window.MainLayout();

		// Init router
		var Controller = new window.Controller( { containerView: App.rootView } );
		var Router = new window.Router( { controller: Controller, containerView: App.rootView } );

		// Start the app
		// App.start( { "data": data } );
		App.start( {} );

	// });

});

/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {

		this.containerView = options.containerView;
		this.prismicURL = 'https://aderinsola.prismic.io/api';
		this.getContentFromPrismic();
	},

	handleRouteIndex: function (routeData) {

		// Clear the region
		//		this.containerView.content.empty();
		// Init view
		// var view = new window.View();
		// Show  view
		// this.containerView.main.show( view );
	},

	// getter functions

	getContentFromPrismic: function () {
		//		console.log("getting content from prismic \n", Prismic);

		Prismic.api(this.prismicURL, function (error, api) {
			api.query("", {}, function (error, response) {
				// Log error
				if (error) console.log("Prismic error: ", error);
				else {
					// console.log("Prismic success, fetching data...", response)
					// Create the model from the Prismic response

					// TODO 
					// ------------------
					// have to figure out how to render the content view from here
					// ------------------
					
					// create the pages collection with each page inside the object
					var pages = new window.PagesCollection([], response.results);
					
					// create the content layout view. pass the pages object so content know's what each attribute is
					var content = new window.ContentLayout({
						'pages': pages
					});

					// let content render itself information 
					content.render();
					//
					// var pages = new window.ModelArticlesCollection([], response.results);
					// Init view
					//					var view = new window.ViewHome({
					//						"articles": articles
					//					});
					// Show  view
					// _this.containerView.main.show(view);
				}
			});
		});

	}

	// handleRouteSection : function( section_id ) {

	// 	// Clear the region
	// 	this.containerView.main.empty();
	// 	// Init view
	// 	var view = new window.ViewSection( { "id" : section_id } );
	// 	// Show  view
	// 	this.containerView.main.show( view );
	// },



});
/*
	# Defines the main router
*/

window.Router = Backbone.Marionette.AppRouter.extend( {

	initialize: function( options ) {

		var containerView = options.containerView;
		
	},

	appRoutes: {
		"(/)"								: "handleRouteIndex",
		// "section/:id" 					: "handleRouteSection",
	}

});
/*
	# Defines the data model for
*/

// CREATE A PAGE MODEL THAT INHERITS MOST OF THE PRISMIC INFO
window.PageModel = Backbone.Model.extend({

	defaults: {
		"title": "",
		"header": "",
		"brief": "",
		"skills": "",
		"hero-images": {
			"hero-image-1": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"hero-image-2": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"hero-image-3": {
				"url": "/img/default-image.jpg",
				"caption": null
			}
		},
		"process-block": {
			"process-image": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"process-type": "",
			"process-title": "",
			"process-copy": ""
		},
		"url": "",
	},

	initialize: function ({}, PrismicDocument) {
		this.document = PrismicDocument;
		this.createModelSchema(PrismicDocument);
	},

	createModelSchema(PrismicDocument) {
		// Set the ID
		console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("model_id", PrismicDocument.id);

		// setting the title
		this.set("title", PrismicDocument.get('project-pages.title').asText());

		// setting the page callout
		this.set("callout", PrismicDocument.get('project-pages.callout').asText());

		// setting the page callout
		this.set("description", PrismicDocument.get('project-pages.description').asText());


		// setting the skills section
		let skillsArray = PrismicDocument.get('project-pages.skills').asText().split("\n");
		this.set("skills", skillsArray);

		// setting the process section 
		let processArray = '';
		//		console.log(PrismicDocument.get('project-pages.process-block').value);
		let processBlocks = PrismicDocument.get('project-pages.process-block').toArray().map(function (process) {
			//			console.log(process);
			return process.data;
		})
		this.set('process', processBlocks)

		console.log(PrismicDocument.get('project-pages.process-block').toArray());

		//		this.set("url", "/#page/" + Document.id);
		//		console.log(this.attributes)
		// Get the title
		//		if (Document.get("article.title"))
		//			this.set("title", Document.get("article.title").asText());

		// PrismicDocument.fragments['project-pages.brief'].asHtml() works

		//		console.log("trying \n", PrismicDocument.getStructuredText('project-pages.title').asHtml());
		//		console.log("trying \n", PrismicDocument.get('project-pages.title').asHtml());
		//		console.log("in here \n", Prismic.get('Document')); 
		//		console.log("in here \n", PrismicDocument['data']['project-pages.title'].value[0].text); 
		/*
		// Set the url to this Article
		this.set("url", "/#article/" + Document.id);

		// Get the title
		if (Document.get("article.title"))
			this.set("title", Document.get("article.title").asText());

		// Create an array of Prismic ImageView objects
		var images;
		if (Document.fragments["article.images"]) {
			images = Document.fragments["article.images"].toArray().map(function (image) {
				// Get the image
				var img = image.getFirstImage().main;
				// Add the caption if it exists
				img.caption = (image.fragments["caption"]) ? image.fragments["caption"].asText() : null;
				return img;
			});
		} else {
			// TODO: Handle if no images
			images = [{
				"url": "/img/default-image.jpg",
				"caption": null
			}];
		}
		this.set("images", images);

		// Get the body
		if (Document.get("article.body"))
			this.set("body", Document.get("article.body").asHtml());

		// Get the blurb
		if (Document.get("article.blurb")) {
			// Use the blurb field
			this.set("blurb", Document.get("article.blurb").asText());
		} else if (Document.get("article.body")) {
			// Create a blurb by truncating the body
			this.set("blurb", Document.get("article.body").asText());
		}
		// Truncate the blurb
		var truncLength = 100;
		var blurb = this.get("blurb");
		var blurbTruncated = (blurb.length > truncLength) ? blurb.substring(0, truncLength) + "..." : blurb;
		this.set("blurb", blurbTruncated);


		// Get the author
		if (Document.get("article.article_author"))
			this.set("author", Document.get("article.article_author").asText());

		// Get the submitter
		if (Document.get("article.submitter"))
			this.set("submitter", Document.get("article.submitter").asText());

		// Set the publication date
		var date = new moment(Document.lastPublicationDate);
		this.set("date", date.format("YYYY.MM.DD"));

		// Set the tags
		this.set("tags", Document.tags);
*/
	},


	/*
		#	Methods
	*/



});
/*
	# Defines the collection for models
*/

window.PagesCollection = Backbone.Collection.extend({
    model: window.PageModel,

    initialize: function (array, PrismicDataArray) {
        // 
        this.prismicDataArray = PrismicDataArray;
        // For each Document
        _.each(this.prismicDataArray, function (document) {
            // Create a new Document Model
            var a = new window.PageModel({}, document);

            // Add it to this collection
            array.push(a);

        }.bind(this));
    },

    /*
    	#	Methods
    */




});
/*
	# Defines the view for the main layout
*/

window.ContentLayout = Backbone.Marionette.LayoutView.extend({

	el: ".layout--content",

	template: JST["views/content/contentLayout"],

	regions: {
		"mainContent": ".content-top-container",
		"supportingContent": ".content-bottom-container",
	},

	initialize: function (options) {
		this.pagesCollection = options.pages;
		this.contentView = new window.ExecutiveSummaryView({
			'model': this.pagesCollection.models[0],
			'collection': this.pagesCollection.prismicDataArray
		});
		this.processView = new window.ProcessView({
			'model': this.pagesCollection.models[0],
			'collection': this.pagesCollection.prismicDataArray
		})
	},

	/*
		# View 
	*/

	onRender: function () {

		// apparently you're supposed to call this first? investigate
		// http://stackoverflow.com/questions/10946392/hiding-a-view-in-region-manager-when-another-view-is-shown
		// HACK
		this.supportingContent._ensureElement();
		this.regionManager._regions.mainContent.show(this.contentView)
		this.regionManager._regions.supportingContent.show(this.processView)
			// to hide the bottom area
			// this.supportingContent.$el.hide();

		//		var _this = this;
		//		setTimeout( function() {
		//			_this.supportingContent.$el.show(); 
		//		}, 2000 )
	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	// "click .toggleSupportingContent" : "toggleSupportingContent"

	/* toggleSupportingContent: {
		on click, 
		- increase the body, html, .layout--content height by 2 or the height of the expanded div. 
		- change the flex grow property of the top and bottom divs
		should work
			1. make element an element again 
			2. increase the height
			3. reveal the element
	}
*/
	// there needs to be an event where 
	// -- TODO -- "on button click, the supportingContent container is visible and grows"
	/*
		# Methods
	*/

});
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

	initialize: function (options) {},

	/*
		# View 
	*/

	onRender: function () {
		
		// use this as hook for animation 
		// when the main layout renders, render the header & content
		var header = new window.HeaderLayout(); 
		header.render();
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
/*
	# Defines the view that 
*/

window.ViewCompositeViewItem = Backbone.Marionette.ItemView.extend(
{
	className: "cv__item",
	template: JST["views/common/compositeView/compositeView_item"],

	initialize: function( options ) 
	{
		// 
	},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});

/*
	# Defines the view that
*/

window.ViewCompositeView = Backbone.Marionette.CompositeView.extend(
{
	
	template: JST["views/common/compositeView/compositeView"],
	childView: window.ViewCompositeViewItem,
	childViewContainer: ".cv__container",

	initialize: function( options ) {},
	/*
		# View 
	*/

	onRender: function() {},

	

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});
/*
	# Defines the view for 
*/

window.ExecutiveSummaryView = Backbone.Marionette.ItemView.extend({

  template: JST["views/content/executiveSummary/executiveSummary"],

  initialize: function (options) {

  },

  /*
  	# View 
  */

  onRender: function () {
    // Get rid of that pesky wrapping-div.
    // Assumes 1 child element present in template.
    this.$el = this.$el.children();
    // Unwrap the element to prevent infinitely 
    // nesting elements during re-render.
    this.$el.unwrap();
    this.setElement(this.$el);

//    console.log(this);
      //		var old = this.$el;
      //		//		this.setElement('<div class="content--top"></div>');
      ////		console.log('old element \n', this.$el.context.innerHTML)
      //		old.replaceWith(this.$el.context.innerHTML);
  },

  /*
  	# Events
  */

  events: {},

  /*
  	# Methods
  */

});
/*
	# Defines the view for 
*/

window.ProcessView = Backbone.Marionette.ItemView.extend({

  template: JST["views/content/process/process"],

  initialize: function (options) {

  },

  /*
  	# View 
  */

  onRender: function () {
    // Get rid of that pesky wrapping-div.
    // Assumes 1 child element present in template.
    this.$el = this.$el.children();
    // Unwrap the element to prevent infinitely 
    // nesting elements during re-render.
    this.$el.unwrap();
    this.setElement(this.$el);

    //		var old = this.$el;
    //		//		this.setElement('<div class="content--top"></div>');
    ////		console.log('old element \n', this.$el.context.innerHTML)
    //		old.replaceWith(this.$el.context.innerHTML);
  },

  /*
  	# Events
  */

  events: {},

  /*
  	# Methods
  */

});