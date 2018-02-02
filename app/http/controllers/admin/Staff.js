
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/staff');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
