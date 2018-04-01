const root 		= require('app-root-path');
const models 	= require(root + '/database/models');




module.exports = {
	

	index: (req, res, next) => {

		res.locals.headerClass = 'alt';		

		// figure out how to save these on res
		models.Highlight.findAll({attributes: ['date','time','description']}).then( results => {

			highlights = [];
			results.forEach(item => {
				highlights.push(item.get())
			});
			res.locals.highlights = highlights;

		}).then(models.File.findOne({attributes: ['newsletter', 'audiofile']}).then( results => {

				res.locals.newsletter = results.get().newsletter;
				res.locals.audio = results.get().audiofile;

		}).then(models.Homepage.findOne({attributes: ['mission', 'annual_msg', 'pastor_quote']}).then( results => {

			res.locals.mission = results.get().mission;
			res.locals.pastorQuote = results.get().pastor_quote;
			res.locals.annualQuote = decodeURI(results.get().annual_msg);
			
		}).then(function(){
			res.render('pages/public/index');
		})));
	}
}
