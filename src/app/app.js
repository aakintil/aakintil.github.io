/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend({

  initialize: function (options) {},

  start: function (options) {

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

  // Load Data\
  this.prismicURL = 'https://aderinsola.prismic.io/api';
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
  });

});