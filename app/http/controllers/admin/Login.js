const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const bcrypt 		= require('bcrypt');

module.exports = {
	
	index: (req, res, next) => {
		if(req.session && req.session.error)
			res.locals.error = req.session.error;

	  	res.render('pages/admin/login', {layout:'loginLayout'});
	},

	login: (req, res, next) => {


		req.session.reset();

		models.Admin.findOne({where: {username: req.body.username}}).then(result => {
			if(result){
				// username exists
				console.log('******** awesome');
				bcrypt.compare(req.body.passwd, result.get().passwd, (err, res) => {
					console.log("******** "+res);
					if(res) {
						// password is correct
						req.session.reset();
						req.session.admin = {};
						req.session.admin.id = result.get().id;
						req.session.admin.username = result.get().username;
					} else {
						// password is NOT correct
					}
				});
			} else{
				console.log('******** too bad');
				// username doesn't exist
				req.session.error = "SUCKA!"
			}
			res.redirect('/admin/login'); // change this to /admin
		});
	}
}
