
module.exports = {
	
	index: (req, res, next) => {
		
		res.locals.photos = [
			{description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{description: "Some quick example text to build on the card title and make up the bulk of the card's content."}
		];
		
		res.render('pages/public/photos');
	}
}
