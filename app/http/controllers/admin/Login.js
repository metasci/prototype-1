const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const bcrypt 		= require('bcrypt');
const logger    = require(root + '/libs/logger/logger');


function loginError(req, res){
	req.session.error = "Incorrect Login Information.";
    logger.info("(admin) Login.login: Incorrect Login Information.");
    res.redirect('/admin/login');
}


module.exports = {
	
	index: (req, res, next) => {
		if(req.session && req.session.error)
			res.locals.error = req.session.error;

	  	res.render('pages/admin/login', {layout:'loginLayout'});
	},

	login: (req, res, next) => {

		models.Admin.findOne({where: {username: req.body.username}})
            .then(result => {
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

                            logger.info("(admin) Login.login: Successful login attempt.");
                            res.redirect('/admin/');
                        } else {
                            loginError(req, res);
                        }
                    });
                } else {
                    loginError(req, res);
                }
            })
            .catch(err => {
                logger.error("(admin) Login.login: " + err);
            });
	},



	logout: (req, res, next) => {
		req.session.reset();
        logger.info("(admin) Login.logout: Admin logged out.");
        res.redirect('/');
	}
}
