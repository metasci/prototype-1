const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const logger    = require(root + '/libs/logger/logger');

module.exports = {
	/**
	 * Retrieve About info to display on public site
	 */
	index: (req, res, next) => {
		
		models.About.findOne()
            .then(result => {
                res.locals.about = decodeURI(result.get().description);
                logger.info("test");
                logger.debug("test");
                logger.error("test");
            })
            .catch(err => {
                logger.error("(public) About.index: " + err);
            })
            .then(()=>{
                res.render('pages/public/about');
            });
	}
};
