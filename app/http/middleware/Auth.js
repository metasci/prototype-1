const root 			= require('app-root-path');
const models 		= require(root + '/database/models');

module.exports = {
        
        isAuthenticated: (req, res, next)=>{
            
            // add code here
            res.locals.layout = 'adminLayout';
            

            // if(req.session && req.session.admin){
            //     models.Admin.findOne({id: req.session.admin.id}).then(result => {
            //         if(result){
            //             req.admin = result.get();
            //         } else {
            //             console.log('*******');
            //         }
            //     });
            // } else {

            // }


            // if logged in allow passage
            if(true){
                next();
            } else{
                res.redirect('/');
            }
        }
}
