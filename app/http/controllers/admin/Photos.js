
module.exports = {
	
	index: (req, res, next) => {

		res.locals.photos = [
			{id:1,description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:2,description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:3,description: "Some quick example text to build on the card title and make up the bulk of the card's content."}
		];

	  res.render('pages/admin/photos');
	},

	create: (req, res, next) => {
		
		let newImage = {
			image: req.body.image,
			description: req.body.description
		}
		
		// add new photo to db here
		console.log(newImage);
		
		res.redirect('/admin/photos');
	},

	destroy: (req, res, next) => {

		//remove selected photo from db here
		console.log(req.body.id);
		
		res.sendStatus(200);
	}
}
