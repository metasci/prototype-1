
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/ministries');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
