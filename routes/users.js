var express = require('express');
var router = express.Router();


/*
 * Controller references
 */
const Homepage = require('../app/http/controllers/admin/Homepage');
const Ministries = require('../app/http/controllers/admin/Ministries'); 
const About = require('../app/http/controllers/admin/About');
const Photos = require('../app/http/controllers/admin/Photos');
const Worship = require('../app/http/controllers/admin/Worship');
const Rentals = require('../app/http/controllers/admin/Rentals');
const Staff = require('../app/http/controllers/admin/Staff');
const Newsletter = require('../app/http/controllers/admin/Newsletter'); 
const LoginPage = require('../app/http/controllers/admin/Login'); 
const AdminAccount = require('../app/http/controllers/admin/AdminAccount'); 
const MainDash = require('../app/http/controllers/admin/MainDash'); 
 
/*
 * middleware
 */
const Auth = require('../app/http/middleware/Auth'); // redirect to login page

router.use('/admin/', Auth.isAuthenticated);

/* GET users listing. */
router.get('/admin/', MainDash.index);

module.exports = router;

