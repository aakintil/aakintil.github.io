/*
	# Defines the object for the application
*/


window.Application = Backbone.Marionette.Application.extend({

  initialize: function (options) {
    localStorage.setItem('noInternet', false);
  },

  start: function (data) {
    // store the incoming data
    this.data = data;

    // Assign the data
    this.collection = data;

    var dataCollection = this.collection;

    // setup the root view and initialize the main layout
    App.mainLayoutView = new window.MainLayout({
      data: this.data,
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
      localStorage.setItem('noInternet', true);
      console.log("there was an error connecting to prismic: \n ----------------------------- \n", error);
      // Start the app
      //      var localCollection = JSON.parse(localStorage.collection);
      var localCollection = JSON.parse(window.localData);
      var pages = new window.PagesCollection([], localCollection);
      App.start(pages);
    } else { // we successfully hit the prismic api
      api.query("", {}, function (error, response) {
        // Log error
        if (error) {
          console.log("Prismic error: ", error);
        } else {
          var pages = response.results;
          // create the pages collection with each page inside the object
          var pagesCollection = new window.PagesCollection([], pages);
          localStorage.clear();
          // create custom localStorage functions
          localStorage.collection = JSON.stringify(pagesCollection);
          // to show a collection JSON.parse(localStorage.collection);

          App.start(pagesCollection);
        }
      });
    }
  });

});