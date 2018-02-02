
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/calendar');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
