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
		this.selectedModel = options.selectedModel;
		let _pagesCollection = this.pagesCollection.models;
		//		_.each(_pagesCollection, function (i) {
		//			console.log(i.collection.prismicDataArray)
		//		});
		this.contentView = new window.ExecutiveSummaryView({
			'model': this.selectedModel,
			'collection': this.pagesCollection.prismicDataArray
		});
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