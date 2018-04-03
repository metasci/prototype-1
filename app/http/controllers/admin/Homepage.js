const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const sequelize = require('sequelize');

module.exports = {
	
	index: (req, res, next) => {
		
		let highlightQuery = {
			attributes: ['id',
						[sequelize.fn('date_format', sequelize.col('date'), '%m-%d-%Y'), 'date'],
						[sequelize.fn('date_format', sequelize.col('date'), '%h:%i %p'), 'time'],
						'description'
					], 
			order:[['date','ASC']]
		};

		models.Highlight.findAll(highlightQuery).then( results => {

			let highlights = [];
			results.forEach(item => {
				highlights.push(item.get())
			});
			res.locals.highlights = highlights;

		}).then(models.Homepage.findOne({attributes: ['mission', 'annual_msg', 'pastor_quote']}).then( results => {

			res.locals.mission = results.get().mission;
			res.locals.pastorQuote = results.get().pastor_quote;
			res.locals.annualMsg = decodeURI(results.get().annual_msg);
			
		}).then(()=>{
			res.render('pages/admin/homepage');
		}));
	},


	addHighlight: (req, res, next) => {

		let datetime = new Date(req.body.date + "T" + req.body.time + "Z").toISOString();
		console.log(datetime);
		let newHighlight = {
			date: datetime,
			description: req.body.description 
		}
		models.Highlight.create(newHighlight).then(()=>{
			res.redirect('/admin/homepage');
		});
		
	},

	updateAnnual: (req, res, next) => {
		console.log(req.body.description);

		res.sendStatus(200);
	},

	updatePastorQuote: (req, res, next) => {
		console.log(req.body.quote);

		res.redirect('/admin/homepage');
	},

	updateMission: (req, res, next) => {
		console.log(req.body.mission);

		res.redirect('/admin/homepage');
	},

	deleteHighlight: (req, res, next) => {
		console.log(req.body.id);

		res.redirect('/admin/homepage');
	}
}
