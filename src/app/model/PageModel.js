/*
	# Defines the data model for
*/

// CREATE A PAGE MODEL THAT INHERITS MOST OF THE PRISMIC INFO
window.PageModel = Backbone.Model.extend({

	defaults: {
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

	initialize: function ({}, PrismicDocument) {
		this.document = PrismicDocument;
		this.createModelSchema(PrismicDocument);
	},

	createModelSchema(PrismicDocument) {
		// console.log(PrismicDocument) 
		// Set the ID
		// console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("model_id", PrismicDocument.id);

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
			newProcessObj.image = p['process-image'].value.main.url;

			// setting the title
			newProcessObj.title = p['process-title'].value[0].text;

			// setting the type
			newProcessObj.type = p['process-type'].value;

			return newProcessObj;
		})
		this.set('process', processBlocks)

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