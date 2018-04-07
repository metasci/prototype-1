const root 			= require('app-root-path');
const models 		= require(root + '/database/models');

module.exports = {
        
        isAuthenticated: (req, res, next)=>{
            
            // add code here
            res.locals.layout = 'adminLayout';
            

            if(req.session && req.session.admin){
                // session exists
                models.Admin.findOne({where: {id: req.session.admin.id}}).then(result => {
                    if(result){
                        // admin id exists - user can pass
                        next();
                    } else {
                        // user doesn't exist -- remove session
                        req.session.reset();
                        res.redirect('/');
                    }
                });
            } else {
                // session doesn't exist -- send to public homepage
                res.redirect('/');
            }
        }
}
