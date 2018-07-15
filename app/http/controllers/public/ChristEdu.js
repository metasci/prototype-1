const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
    index: (req, res, next) => {
        models.ChristianEdu.getChristianEdu().then(christEdu => {
            res.locals.christedu = christEdu;
            res.render('pages/public/education');
        });
    }
}
