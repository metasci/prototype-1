
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/rentals');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
