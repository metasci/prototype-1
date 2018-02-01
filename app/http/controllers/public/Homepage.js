


module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/index', { title: 'Express'});
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
