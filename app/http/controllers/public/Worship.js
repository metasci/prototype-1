const root 		= require('app-root-path');
const models 	= require(root + '/database/models');


module.exports = {
	
	index: (req, res, next) => {
	
		res.locals.service = {};
		res.locals.musicItem = {};
		res.locals.docs = {};

		models.ServiceTime.findAll({attributes: ['time']}).then(results => {
			
			res.locals.service.times = [];
			results.forEach(item => {
				res.locals.service.times.push(item.get().time);
			});

		}).then(models.Service.findOne({attributes: ['description']}).then(results => {
	
			res.locals.service.description = decodeURI(results.get().description);
	
		}).then(models.Music.findAll().then(results => {

            results.forEach(item => {0
                res.locals.musicItem[item.get().title] = decodeURI(item.get().description);
            });

		}).then(models.File.findOne().then(result => {
	
			res.locals.docs.bulletin = result.get().bulletin;
			res.locals.docs.refrigerator = result.get().refrigerator;
			res.locals.docs.newsletter = result.get().newsletter;
            res.locals.audio = result.get().audiofile;

        }).finally(function(){
			res.render('pages/public/worship');
		}))));
	}
}

