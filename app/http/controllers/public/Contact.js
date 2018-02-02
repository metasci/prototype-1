
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/contact');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
