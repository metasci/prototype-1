


module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/public/index', { headerClass: 'alt'});
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
