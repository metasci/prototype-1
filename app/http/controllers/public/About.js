


module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/about');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
