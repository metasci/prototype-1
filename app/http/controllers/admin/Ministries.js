const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {
		
		res.locals.ministry = {};

		models.Ministry.findAll().then(results => {
			results.forEach(item => {
				res.locals.ministry[item.get().title] = decodeURI(item.get().description);
			});
		}).finally(()=>{
			res.render('pages/admin/ministries');
		});
	},

	/**
	 * respond to post
	 * add new ministry to database
	 */
	create: (req, res, next) => {
		let newMinistry = {
			title: req.body.title,
			description: req.body.description
		}
		// add new ministry to database here
		models.Ministry.create(newMinistry).then(()=>{
			res.sendStatus(200);
		});
	},

	/**
	 * Delete Ministry from database
	 */
	destroy: (req, res, next) => {
		models.Ministry.destroy({where:{title:req.body.title}}).then(()=>{
			res.sendStatus(200);
		});
	}
}
