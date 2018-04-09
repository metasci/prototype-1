const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const bcrypt = require('bcrypt');

module.exports = {
	
	index: (req, res, next) => {
		if(req.session && req.session.error)
			res.locals.error = req.session.error;

	  res.render('pages/admin/account');
	},

	update: (req, res, next) => {

		
		models.Admin.findOne().then( admin =>{

			// make compare current the passwd from db
			bcrypt.compare(req.body.current, admin.get().passwd, (err, result) => {
				if(result) {
					delete req.session.error;
					// current passwd is correct
					// hash new passwd
					bcrypt.hash(req.body.passwd, 10, function(err, hash) {
						// save new passwd to db
						admin.update({passwd: hash}).then(()=>{
							res.redirect('/admin/account');
						});
					});
				} else {
					// current passwd is incorrect
					req.session.error = "The current password you entered was incorrect.";
					res.redirect('/admin/account');
				}
			});
		});
	}
}
