# Backbone.Marionette Starter Kit

## Useful Documentation Links

* [BackboneJS](http://backbonejs.org/docs/backbone.html)
* [Marionette](http://marionettejs.com/docs/v2.4.5/)
* [Underscore](http://underscorejs.org/)

## Build Notes

This project uses [Node](https://nodejs.org/en/) and [Gulp](http://gulpjs.com/) to build the project. Once built, the site should be able to run statically from a webserver by serving the generated `./build/` directory.

## Installation

#### Install Node and NPM

Use the installer found [here](https://nodejs.org/en/download/).

Then install all the dependant packages, run `npm install` in the root directory:

`npm install`

## Build

To build the project, run the following command in the root directory:

`gulp build`

This will generate a `./build/` directory. This is a static, self-contained build of the site suitable for serving from a web server.

## Development

For developement, run the following command in the root directory:

`npm start`

This should do 3 things: 

1. Run the `build` task and generate a `./build/` directory
2. For development purposes, runs a local webserver using [Browser Sync](https://www.browsersync.io/) that serves up the generated `./build/` directory. This should be accesible at [http://localhost:3000/](http://localhost:3000/), but check the output of the `npm start` command to be sure.
3. Uses Gulp to watch for any changes to HTML, SASS and JS files in `./src/assets` and triggers BrowserSync to reload the page when changes are made.
