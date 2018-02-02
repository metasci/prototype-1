
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/login');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
