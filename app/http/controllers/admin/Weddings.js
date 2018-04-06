const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	/**
	 * Retrieve wedding info to display on admin dash
	 */
	index: (req, res, next) => {

		models.Wedding.findOne().then(result => {
			res.locals.weddings = decodeURI(result.get().description);
		}).finally(() => {
			res.render('pages/admin/weddings');
		});
	},
	
	/**
	 * respond to post
	 * add new wedding info to database
	 */
	create: (req, res, next) => {

		models.Wedding.findOne().then(wedding =>{
			wedding.update({description: req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	}
}
