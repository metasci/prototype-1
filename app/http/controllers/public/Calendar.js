
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/calendar');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
