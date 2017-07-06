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