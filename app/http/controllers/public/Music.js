const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
    
    /**
     * Retrieve music info from database to display on admin page
     */
	index: (req, res, next) => {

        res.locals.musicItem = {};

        models.Music.findAll().then(results => {
            results.forEach(item => {
                res.locals.musicItem[item.get().title] = decodeURI(item.get().description);
            });
        }).finally(()=>{
            res.render('pages/public/music');
        });
    }
}
