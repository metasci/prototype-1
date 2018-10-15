const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {
    index: (req, res, next) => {
        models.ChristianEdu.getChristianEdu()
            .then(christEdu => {
                res.locals.christedu = christEdu;
            })
            .catch(err => {
                logger.error("(public) ChristEdu.index: " + err);
            })
            .then(() => {
                res.render('pages/public/education');
            });
    }
}
