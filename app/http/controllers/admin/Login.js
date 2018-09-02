const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const bcrypt 		= require('bcrypt');


function loginError(req, res){
	req.session.error = "Incorrect Login Information.";
	res.redirect('/admin/login');
}


module.exports = {
	
	index: (req, res, next) => {
		if(req.session && req.session.error)
			res.locals.error = req.session.error;

	  	res.render('pages/admin/login', {layout:'loginLayout'});
	},

	login: (req, res, next) => {

		models.Admin.findOne({where: {username: req.body.username}}).then(result => {
			let usernameExists = result ? true : false;
		    if(usernameExists){
				// username exists
				bcrypt.compare(req.body.passwd, result.get().passwd, (err, response) => {
					let passwdIsCorrect = response;
				    if(passwdIsCorrect) {
						req.session.reset();
						req.session.admin = {};
						req.session.admin.id = result.get().id;
						req.session.admin.username = result.get().username;
						res.redirect('/admin/');
					} else {
						loginError(req, res);
					}
				});
			} else {
				loginError(req, res);
			}
		});
	},



	logout: (req, res, next) => {
		req.session.reset();
		res.redirect('/');
	}
}
