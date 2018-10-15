const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {
	
	index: (req, res, next) => {
        models.Ministry.getMinistries()
            .catch(err => {
                logger.error("(admin) Ministries.index: " + err);
            })
            .then(ministries => {
                res.locals.ministry = ministries;
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
		models.Ministry.create(newMinistry)
            .then(()=>{
                res.sendStatus(200);
            })
            .catch(err => {
                logger.error("(admin) Ministries.create: " + err);
                res.sendStatus(500);
            });
	},

	/**
	 * Delete Ministry from database
	 */
	destroy: (req, res, next) => {
		models.Ministry.destroy({where:{title:req.body.title}})
            .then(()=>{
                res.sendStatus(200);
            })
            .catch(err => {
                logger.error("(admin) Ministries.destroy: " + err);
            });
	}
}
