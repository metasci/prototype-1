
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/login', {layout:'loginLayout'});
	}
}
