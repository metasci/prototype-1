const root 		= require('app-root-path');
const models 	= require(root + '/database/models');


module.exports = {
	
	index: (req, res, next) => {
        models.Ministry.getMinistries()
            .then(ministries => {
                res.locals.ministry = ministries;
                res.render('pages/public/ministries');
            });
	}
}
