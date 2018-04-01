
module.exports = {
	
	index: (req, res, next) => {
		
		res.locals.staff = [
			{name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."}
		];

		res.render('pages/public/staff');
	
	}

}
