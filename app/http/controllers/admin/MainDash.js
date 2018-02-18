
module.exports = {
	
	index: (req, res, next) => {
        console.log("yoyoyyo");
	    res.render('pages/admin/index', { layout: 'adminLayout' });
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
