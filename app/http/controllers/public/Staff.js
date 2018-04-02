const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {
		

		models.Staff.findAll().then(results => {
			res.locals.staff = [];
			results.forEach(item => {
				let staff = {
					photo: item.get().photo,
					name: item.get().name,
					title: item.get().title,
					description: item.get().description
				}
				res.locals.staff.push(staff);
			});
		}).finally(()=>{
			res.render('pages/public/staff');
		});
	}
}
