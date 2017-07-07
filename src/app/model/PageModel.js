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

	initialize: function (defaults, PrismicDocument) {
		this.document = PrismicDocument;

		if (localStorage.getItem('noInternet')) {
			this.createSchemaFromLocalData(this.document)
		} else {
			this.createModelSchema(this.document);
		}
	},

	createSchemaFromLocalData(page) {
		//		console.log('calling the local schema creation cuz we dont have internet');
		// Set the ID
		// console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("model_id", page.model_id);

		// Set the category
		this.set("category", page.category);

		// setting the title
		this.set("title", page.title);

		// setting the page callout
		this.set("callout", page.callout);

		// TODO 
		// --- this is an example of when you use this.defaults['something'] for values that should appear if prismic isn't working
		// setting the page callout
		this.set("description", page.description);

		// setting the skills section
		this.set("skills", page.skills);

		// setting the process section 
		this.set('process', page.process);
	},
	createModelSchema(PrismicDocument) {
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
	},


	/*
		#	Methods
	*/



});