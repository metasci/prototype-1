
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/photos');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
