const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {

	/**
	 * Retreive Staff info from database and display admin page
	 */
	index: (req, res, next) => {
		res.locals.staff = [];
		models.Staff.findAll().then(results => {
			results.forEach(item => {
				let staff = {
					id: item.get().id,
					photo: item.get().photo,
					name: item.get().name,
					title: item.get().title,
					description: item.get().description
				}
				res.locals.staff.push(staff);
			});
		}).finally(()=>{
			res.render('pages/admin/staff');
		});
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
