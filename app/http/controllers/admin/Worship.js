const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {

		res.locals.service = {};
		res.locals.christedu = {};
		res.locals.service.times = [];

		models.ServiceTime.findAll().then(results => {
			
			results.forEach(item => {
				res.locals.service.times.push({info:item.get().time, id:item.get().id});
			});
			 
		}).then(models.Service.findOne({attributes: ['description']}).then(results => {

			res.locals.service.description = decodeURI(results.get().description);

		}).then(models.ChristianEdu.findAll({attributes: ['title', 'description']}).then(results => {
			
			results.forEach(item => {
				res.locals.christedu[item.get().title] = decodeURI(item.get().description);
			});
			
		}).finally(function(){
			res.render('pages/admin/worship');
		})));
	},


	/**
	 * Christian Education 
	 */
	createChristEdu: (req, res, next) => {
		let newChristEdu = {
			title: req.body.title,
			description: req.body.description
		}
		// add new Christian Education to database here
		models.ChristianEdu.create(newChristEdu).then(()=>{
			res.sendStatus(200);
		});
	},

	deleteChristEdu: (req, res, next) => {
		models.ChristianEdu.destroy({where:{title:req.body.title}}).then(()=>{
			res.sendStatus(200);
		});
	},



	/**
	 * Service
	 */
	createServiceDesc: (req, res, next) => {

		models.Service.findOne().then(service => {
			service.update({description:req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	},

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
