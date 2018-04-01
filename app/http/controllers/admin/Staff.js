
module.exports = {
	
	index: (req, res, next) => {

		res.locals.staff = [
			{id:1,name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:2,name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:3,name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:4,name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:5,name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:6,name: "Phyllis", title: "Worker Bee", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
			{id:7,name: "Diane White", title: "Pastor", description: "Some quick example text to build on the card title and make up the bulk of the card's content."}
		];

	  res.render('pages/admin/staff');
	},

	create: (req, res, next) => {
		
		let newStaff = {
			image: req.body.image,
			name: req.body.name,
			title: req.body.title,
			description: req.body.description
		}
		
		// add new Staff to db here
		console.log(newStaff);
		
		res.redirect('/admin/staff');
	},

	destroy: (req, res, next) => {

		//remove selected staff from db here
		console.log(req.body.id);
		
		res.sendStatus(200);
	}
}
