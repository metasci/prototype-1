module.exports = {
        
        isAuthenticated: (req, res, next)=>{
            
            // add code here
            res.locals.layout = 'adminLayout';
            next();
        }
}
