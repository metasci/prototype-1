
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/newsletter');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
