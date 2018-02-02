
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/staff');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
