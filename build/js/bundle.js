/*
	# Defines the object for the application
*/


window.Application = Backbone.Marionette.Application.extend({

  initialize: function (options) {},

  start: function (data) {
    // store the incoming data
    this.data = data;

    // Assign the data
    // window.DataModel = new window.ModelData( options.data );
    var localStore = true; // a catch so that we don't roll into the prismic way of organizing models
    this.collection = new window.PagesCollection([], this.data, localStore);

    var dataCollection = this.collection;
    // setup the root view and initialize the main layout
    App.mainLayoutView = new window.MainLayout({
      data: this.data,
      model: window.PageModel,
      collection: dataCollection
    });

    // initialize the controller
    var Controller = new window.Controller({
      containerView: App.mainLayoutView
    });

    // initialize the router
    var Router = new window.Router({
      controller: Controller,
      containerView: App.mainLayoutView
    });

    // render the main layout view
    this.mainLayoutView.render();

    // Start the history keeping
    Backbone.history.start();
  }

});

/*
	# The main entry point of the app
*/

// Init an app instance
var App = new window.Application();
$(document).ready(function () {

  // store the prismic io url
  this.prismicURL = 'https://aderinsola.prismic.io/api';

  // make a call to prismic.io
  Prismic.api(this.prismicURL, function (error, api) {
    if (error) { // we couldn't hit the prismic api
      console.log("there was an error connecting to prismic: \n ----------------------------- \n", error);
      var pages = {
        'about': {
          "category": "bio",
          "title": "about",
          "header": "about",
          "brief": "this is the about section",
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
            "process-type": "left",
            "process-title": "process 1",
            "process-copy": "the copy for the process"
          },
          "url": "/about",
        },
        'process': {
          "category": "bio",
          "title": "process",
          "header": "process",
          "brief": "this is the process section",
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
            "process-type": "left",
            "process-title": "process 2",
            "process-copy": "the copy for the process section"
          },
          "url": "/process",
        },
      }

      // Start the app
      App.start(pages);
    } else { // we successfully hit the prismic api
      console.log("successful call")
      api.query("", {}, function (error, response) {
        // Log error
        if (error) {
          console.log("Prismic error: ", error);
        } else {
          // ------------------------------------------- ***************************
          // ------------------------------------------- ***************************
          // TODO 
          // --------- REWRITE THIS ENTIRE SECTION AND MAKE CONSISTENT WITH THE TOP
          // ------------------------------------------- ***************************
          // ------------------------------------------- ***************************

          // console.log("Prismic success, fetching data...", response)
          // Create the model from the Prismic response

          // TODO 
          // ------------------
          // have to figure out how to render the content view from here
          // ------------------

          var pages = response.results; 
          // create the pages collection with each page inside the object
          var pagesCollection = new window.PagesCollection([], pages);
          
          App.start(pagesCollection);
        }
      });
    }
  });

});
/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {
		// none of this is even getting rendered anymore
		//		this.mainLayout = options.containerView;
		//		this.prismicURL = 'https://aderinsola.prismic.io/api';
		//		this.getContentFromPrismic();
	},

	handleRouteIndex: function (routeData) {
		console.log("what")
			// TODO 
			// we have to come back here and set this up properly 
			// Clear the region
			//		this.containerView.content.empty();
			// Init view
			// var view = new window.View();
			// Show  view
			// this.containerView.main.show( view );
	},

	// getter functions

	getContentFromPrismic: function () {
		var _this = this;
		console.log("getting all th edata ");
		Prismic.api(this.prismicURL, function (error, api) {
			api.query("", {}, function (error, response) {
				// Log error
				if (error) {
					console.log("Prismic error: ", error);
				} else {
					// console.log("Prismic success, fetching data...", response)
					// Create the model from the Prismic response

					// TODO 
					// ------------------
					// have to figure out how to render the content view from here
					// ------------------

					// create the pages collection with each page inside the object
					var pages = new window.PagesCollection([], response.results);

					console.log("getting all th edata ", _this.options.containerView)
					_this.options.containerView.pages = pages;
					//					 console.error(_this.containerView)
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

	},

	renderPage: function (pageName) {
		//		console.log('calling renderPage function');
	},
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
		//		"(/):page"					: "renderPage"
		// "section/:id" 					: "handleRouteSection",
	}

});
/*
	# Defines the data model for
*/

// CREATE A PAGE MODEL THAT INHERITS MOST OF THE PRISMIC INFO
window.PageModel = Backbone.Model.extend({

	defaults: {
		"category": "",
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
	}, // come back to and reset. if there aren't any values, then give them custom defaults

	url: function () {
		// Important! It's got to know where to send its REST calls. 
		// In this case, POST to '/donuts' and PUT to '/donuts/:id'
		return this.id ? '/page/' + this.id : '/page';
	},

	initialize: function (defaults, PrismicDocument, localStore) {
		this.localStore = localStore;
		this.document = PrismicDocument;
		if (this.localStore) {
			this.setLocalSchema(this.document)
		} else this.createModelSchema(this.document);
	},

	setLocalSchema(page) {
		this.set("category", page.category === null ? this.defaults.category : JSON.stringify(page.category)); 
		this.set("title", page.title === null ? this.defaults.title :  JSON.stringify(page.title)); 
		this.set("header", page.header === null ? this.defaults.header :  JSON.stringify(page.header)); 
	},
	createModelSchema(PrismicDocument) {
		// console.log(PrismicDocument) 
		// Set the ID
		// console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("model_id", PrismicDocument.id);

		// Set the category
		// console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("category", PrismicDocument.get('project-pages.category').asText());

		// setting the title
		this.set("title", PrismicDocument.get('project-pages.title') === null ? '' : PrismicDocument.get('project-pages.title').asText());

		// setting the page callout
		this.set("callout", PrismicDocument.get('project-pages.callout') === null ? '' : PrismicDocument.get('project-pages.callout').asText());

		// TODO 
		// --- this is an example of when you use this.defaults['something'] for values that should appear if prismic isn't working
		// setting the page callout
		this.set("description", PrismicDocument.get('project-pages.description') === null ? '' : PrismicDocument.get('project-pages.description').asText());


		// setting the skills section
		let skillsArray = PrismicDocument.get('project-pages.skills') === null ? '' : PrismicDocument.get('project-pages.skills').asText().split("\n") || '';
		this.set("skills", skillsArray);

		// setting the process section 
		// console.log(PrismicDocument.get('project-pages.process-block').value);
		let processBlocks = PrismicDocument.get('project-pages.process-block') === null ? '' : PrismicDocument.get('project-pages.process-block').toArray().map(function (process) {
			// store the original object
			let p = process.data;

			// new process obj
			let newProcessObj = {};

			// setting the copy 
			newProcessObj.copy = p['process-copy'].value[0].text;

			// setting the image 
			// console.log( p )
			newProcessObj.image = p['process-image'] === undefined ? '' : p['process-image'].value.main.url;

			// setting the title
			newProcessObj.title = p['process-title'].value[0].text;

			// setting the type
			newProcessObj.type = p['process-type'].value;

			return newProcessObj;
		})
		this.set('process', processBlocks);

		//		console.log(PrismicDocument.get('project-pages.process-block').toArray());

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
        this.prismicData = PrismicDataArray;
        // For each Document
        _.each(this.prismicData, function (page) {
            // Create a new Document Model
            var a = new window.PageModel({}, page);

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

	// custom call from the headerView to the children layout views
	updateView: function (newModel) {

		// we shouldn't have to create a new view
		// for now, it creates a new view and instantiates it with a new model 
		this.newContentView = new window.ExecutiveSummaryView({
			'model': newModel,
		});

		// same for the process view
		this.newProcessView = new window.ProcessView({
			'model': newModel
		});


		/* 
		 * LOOK INTO THIS: WHAT DOES EACH DO AND DO WE NEED IT? TODO 
		this.remove();
		this.unbind();
		this.supportingContent._ensureElement();
		*/
		// then we have to clear the regions: mainContent & supportingContent
		this.regionManager._regions.mainContent.empty();
		this.regionManager._regions.supportingContent.empty();

		// then we just want to show the mainContent 
		this.regionManager._regions.mainContent.show(this.newContentView);
	},

	// init call
	initialize: function (options) {

		// save the pages collection
		this.pagesCollection = options.pages;

		// save the selected model
		this.selectedModel = options.selectedModel;

		// create a new exec view with the model and collection ( we don't need the collection )
		this.contentView = new window.ExecutiveSummaryView({
			'model': this.selectedModel,
			'collection': this.pagesCollection.prismicDataArray
		});

		// create a new process view with the model and collection ( we don't need the collection )
		this.processView = new window.ProcessView({
			'model': this.selectedModel,
			'collection': this.pagesCollection.prismicDataArray
		})
	},

	/*
		# View 
	*/

	onRender: function () {

		// apparently you're supposed to call this first? investigate
		// http://stackoverflow.com/questions/10946392/hiding-a-view-in-region-manager-when-another-view-is-shown
		// HACK --> this could be a hack TODO || TEST AND FIND ALTERNATIVES
		this.mainContent._ensureElement(); // ??
		this.supportingContent._ensureElement(); // ??

		// we always want to show the content view on render
		this.regionManager._regions.mainContent.show(this.contentView)
	},

	/*
		# Events
	*/

	events: {
		// showing the process event call
		"click .behind-the-scenes-button": function () {
			// allow the region manager to show the supporting content
			// TODO --> create a global this.processView that gets updated rather than using a new variable. 
			this.regionManager._regions.supportingContent.show(this.newProcessView);
		},
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
	
	/*
		# Methods
	*/

});
/*
	# Defines the view for the main layout
*/
// -------------------------------------------
// *********************************************
// might have to turn this into a collectionView layout


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