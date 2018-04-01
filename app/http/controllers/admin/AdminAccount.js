
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/account');
	},

	update: (req, res, next) => {

		let passwd = req.body.passwd;

		console.log(passwd);

		res.redirect('/admin/account');
	}
}
