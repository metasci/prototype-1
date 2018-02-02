
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/ministries');
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
