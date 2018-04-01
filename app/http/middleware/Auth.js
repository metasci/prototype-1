module.exports = {
        
        isAuthenticated: (req, res, next)=>{
            
            // add code here
            res.locals.layout = 'adminLayout';
            
            // if logged in allow passage
            if(true){
                next();
            } else{
                res.redirect('/');
            }
        }
}
