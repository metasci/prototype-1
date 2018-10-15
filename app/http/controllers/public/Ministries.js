const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {
	
	index: (req, res, next) => {
        models.Ministry.getMinistries()
            .then(ministries => {
                res.locals.ministry = ministries;
            })
            .catch(err => {
                logger.error("(public) Ministries index: " + err);
            })
            .then(() => {
                res.render('pages/public/ministries');
            });
	}
};
