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