const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {
		
		models.Wedding.findOne().then(result => {
			res.locals.weddings = decodeURI(result.get().description);
		}).finally(() => {
			res.render('pages/public/weddings');
		});

	}
}
