


module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/homepage');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
