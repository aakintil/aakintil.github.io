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