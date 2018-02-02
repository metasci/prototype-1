
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/rentals');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
