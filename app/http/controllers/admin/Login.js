
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/login', {layout:'loginLayout'});
	},

	login: (req, res, next) => {

		let cred = {
			username: req.body.username,
			passwd: req.body.passwd
		}

		console.log(cred);

		res.redirect('/admin');

	}
}
