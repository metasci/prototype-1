
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/worship');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
