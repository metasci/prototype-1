
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/about');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
