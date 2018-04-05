const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	/**
	 * Retrieve About info to display on admin dash
	 */
	index: (req, res, next) => {
		
		models.About.findOne().then(result => {
			res.locals.about = decodeURI(result.get().description);
		}).finally(()=>{
			res.render('pages/admin/about');
		});
	},
	
	/**
	 * respond to post
	 * add new About info to database
	 */
	create: (req, res, next) => {
		models.About.findOne().then(about =>{
			about.update({description: req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	}
}
