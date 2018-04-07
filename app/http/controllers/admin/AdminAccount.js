const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const bcrypt = require('bcrypt');

module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/account');
	},

	update: (req, res, next) => {

		
		// make compare hash the passwd from db
		// bcrypt.compare(req.body.current, hash, (err, res) => {
		// 	if(res) {
				bcrypt.hash(req.body.passwd, 10, function(err, hash) {
					models.Admin.findOne().then( admin =>{ // maybe move this out of the compare
						admin.update({passwd: hash}).then(()=>{
							res.redirect('/admin/account');
						});
					});
				});
			// } else {
			// 	// add something here to handle incorrect current passwd
			// }
		// });
	}
}
