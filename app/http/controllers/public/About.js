const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	/**
	 * Retrieve About info to display on public site
	 */
	index: (req, res, next) => {
		
		models.About.findOne().then(result => {
			res.locals.about = decodeURI(result.get().description);
		}).finally(()=>{
			res.render('pages/public/about');
		});
	}
}
