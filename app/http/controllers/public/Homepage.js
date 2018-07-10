const root 		= require('app-root-path');
const models 	= require(root + '/database/models');
const sequelize = require('sequelize');



module.exports = {
	

	index: (req, res, next) => {

		res.locals.headerClass = 'alt';		

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

		}).then(models.File.findOne({attributes: ['newsletter']}).then( results => {

				res.locals.newsletter = results.get().newsletter;

		}).then(models.Homepage.findOne({attributes: ['mission', 'annual_msg', 'pastor_quote']}).then( results => {

			res.locals.mission = results.get().mission;
			res.locals.pastorQuote = results.get().pastor_quote;
			res.locals.annualMsg = decodeURI(results.get().annual_msg);
			
		}).then(function(){
			res.render('pages/public/index');
		})));
	}
}
