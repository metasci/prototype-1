
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/index');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
