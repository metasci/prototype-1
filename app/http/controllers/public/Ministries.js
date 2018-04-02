const root 		= require('app-root-path');
const models 	= require(root + '/database/models');


module.exports = {
	
	index: (req, res, next) => {

		res.locals.ministry = {};

		models.Ministry.findAll().then(results => {
			results.forEach(item => {
				res.locals.ministry[item.get().title] = item.get().description;
			});
		}).finally(()=>{
			res.render('pages/public/ministries');
		});
	}
}
