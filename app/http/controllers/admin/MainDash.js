
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/mainDash');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
