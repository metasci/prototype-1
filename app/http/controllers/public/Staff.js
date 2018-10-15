const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {
	
	/**
	 * Retreive Staff info from database and display public page
	 */
	index: (req, res, next) => {
		models.Staff.findAll()
            .then(results => {
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
            })
            .catch(err => {
                logger.error("(public) Staff.index: " + err);
            })
            .then(()=>{
                res.render('pages/public/staff');
            });
	}
}
