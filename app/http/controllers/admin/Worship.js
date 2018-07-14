const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {
        getData().then(data => {
            res.locals = data;
            res.render('pages/admin/worship');
        });
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



function getData() {
    let promises = [
        models.ServiceTime.getServiceTimes(),
        models.Service.getServiceDescription(),
        models.Music.getMusic(),
        models.File.getFiles()
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};
            data.service = {};

            data.service.times = values[0];
            data.service.description = values[1];
            data.musicItem = values[2];
            data.docs = values[3].docs;
            data.audio = values[3].audio;

            return data;
        });
}