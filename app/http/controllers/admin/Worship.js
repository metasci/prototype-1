const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {

		res.locals.service = {};
		res.locals.musicItem = {};
		res.locals.service.times = [];

		models.ServiceTime.findAll().then(results => {
			
			results.forEach(item => {
				res.locals.service.times.push({info:item.get().time, id:item.get().id});
			});
			 
		}).then(models.Service.findOne({attributes: ['description']}).then(results => {

			res.locals.service.description = decodeURI(results.get().description);

		}).then(models.Music.findAll().then(results => {
            results.forEach(item => {
                res.locals.musicItem[item.get().title] = decodeURI(item.get().description);
            });
        }).finally(function(){
			res.render('pages/admin/worship');
		})));
	},


    /**
     * Music
     */
    createMusic: (req, res, next) => {
        let newMusic = {
            title: req.body.title,
            description: req.body.description
        }

        models.Music.create(newMusic).then(()=>{
            res.sendStatus(200);
        });
    },

    deleteMusic: (req, res, next) => {
        models.Music.destroy({where:{title:req.body.title}}).then(()=>{
            res.sendStatus(200);
        });
    },


	/**
	 * Service Description
	 */
	createServiceDesc: (req, res, next) => {

		models.Service.findOne().then(service => {
			service.update({description:req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	},


    /**
    * Service Time
    */
	addTime: (req, res, next) => {
		models.ServiceTime.create({time:req.body.time}).then(()=>{
			res.redirect('/admin/worship/');
		});
	},

	deleteTime: (req, res, next) => {
		models.ServiceTime.destroy({where:{id:req.body.id}}).then(()=>{
			res.sendStatus(200);
		});
	}
}
