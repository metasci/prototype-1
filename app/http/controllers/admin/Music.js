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
            res.render('pages/admin/music');
        });
    },


    /**
	 * respond to post
	 * add new music to database
	 */
	create: (req, res, next) => {
		let newMusic = {
			title: req.body.title,
			description: req.body.description
		}

		// add new ministry to database here
		models.Music.create(newMusic).then(()=>{
			res.sendStatus(200);
		});
	},
	

	/**
	 * DELETE MUSIC
	 */
	destroy: (req, res, next) => {
		models.Music.destroy({where:{title:req.body.title}}).then(()=>{
			res.sendStatus(200);
		});
	}
}
