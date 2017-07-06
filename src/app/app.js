/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend({

  initialize: function (options) {},

  start: function (data) {
    this.data = data;
    console.log('start function is called ', this.data)
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
$(document).ready(function () {

  // store the prismic io url
  this.prismicURL = 'https://aderinsola.prismic.io/api';

  // make a call to prismic.io
  Prismic.api(this.prismicURL, function (error, api) {
    if (error) { // we couldn't hit the prismic api
      console.log("there was an error connecting to prismic: \n ----------------------------- \n", error);
      var pages = {
        'about': ['the about data'],
        'process': ['the process data']
      }

      // setup the root view and initialize the main layout
      App.rootView = new window.MainLayout();

      // Init router
      var Controller = new window.Controller({
        containerView: App.rootView
      });
      var Router = new window.Router({
        controller: Controller,
        containerView: App.rootView
      });

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

          // create the pages collection with each page inside the object
          var pages = new window.PagesCollection([], response.results);

          //					console.log(_this)
          // _this.options.containerView.pages = pages;
          //					 console.error(_this.containerView)
          //
          // var pages = new window.ModelArticlesCollection([], response.results);
          // Init view
          //					var view = new window.ViewHome({
          //						"articles": articles
          //					});
          // Show  view
          // _this.containerView.main.show(view);
          //    });


          // Init the main view
          App.rootView = new window.MainLayout({
            pages: pages
          });

          // Init router
          var Controller = new window.Controller({
            containerView: App.rootView
          });
          var Router = new window.Router({
            controller: Controller,
            containerView: App.rootView
          });

          // Start the app
          // App.start( { "data": data } );
          App.start({
            'pages': pages
          });
        }

      });
    }
  });

});