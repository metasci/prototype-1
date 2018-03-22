var express = require('express');
var router = express.Router();


/*
 * Controller references
 */

const Controller = require('../app/http/controllers').admin;
/*
 * middleware
 */
const Middleware = require('../app/http/middleware'); // redirect to login page



/*
 * Assign middleware for routes in this file
 */

router.use('/', Middleware.Auth.isAuthenticated);




router.get('/', Controller.MainDash.index);

router.get('/login', Controller.Login.index);

router.get('/homepage', Controller.Homepage.index);
router.post('/homepage', Controller.Homepage.create);

router.get('/ministries', Controller.Ministries.index);
router.post('/ministries', Controller.Ministries.create);


router.get('/about', Controller.About.index);

router.get('/photos', Controller.Photos.index);

router.get('/worship', Controller.Worship.index);

router.get('/weddings', Controller.Weddings.index);
router.post('/weddings', Controller.Weddings.create);

router.get('/staff', Controller.Staff.index);

router.get('/newsletter', Controller.Newsletter.index);

router.get('/account', Controller.AdminAccount.index);


module.exports = router;

