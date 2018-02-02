
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/photos');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
