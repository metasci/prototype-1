
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/worship');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
