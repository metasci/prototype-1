
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/account');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
