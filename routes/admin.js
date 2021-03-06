var express     = require('express');
var router      = express.Router();


/*
 * Controller references
 */

const Controller = require('../app/http/controllers').admin;
/*
 * middleware
 */
const Middleware = require('../app/http/middleware'); // redirect to login page




router.get('/login', Controller.Login.index);
router.post('/login', Controller.Login.login);

/*
 * Assign middleware for routes in this file
 */

router.use('/', Middleware.Auth.isAuthenticated);

router.get('/logout', Controller.Login.logout);

router.get('/', Controller.MainDash.index);


router.get('/homepage', Controller.Homepage.index);
router.post('/homepage/addhighlight', Controller.Homepage.addHighlight);
router.post('/homepage/updateannual', Controller.Homepage.updateAnnual);
router.post('/homepage/pastorquote', Controller.Homepage.updatePastorQuote);
router.post('/homepage/missionstatement', Controller.Homepage.updateMission);
router.post('/homepage/deletehighlight', Controller.Homepage.deleteHighlight);


router.get('/ministries', Controller.Ministries.index);
router.post('/ministries', Controller.Ministries.create);
router.post('/ministries/delete', Controller.Ministries.destroy);


router.get('/about', Controller.About.index);
router.post('/about', Controller.About.create);

router.get('/photos', Controller.Photos.index);
router.post('/photos', Controller.Photos.create);
router.post('/photos/delete', Controller.Photos.destroy);

router.get('/worship', Controller.Worship.index);
router.post('/worship/music/create', Controller.Worship.createMusic);
router.post('/worship/music/delete', Controller.Worship.deleteMusic);
router.post('/worship/servicedescription/create', Controller.Worship.createServiceDesc);
router.post('/worship/servicedescription/delete', Controller.Worship.deleteServiceDesc);
router.post('/worship/servicetime/create', Controller.Worship.addTime);
router.post('/worship/servicetime/delete', Controller.Worship.deleteTime);



router.get('/rentals', Controller.Rentals.index);
router.post('/rentals', Controller.Rentals.create);

router.get('/staff', Controller.Staff.index);
router.post('/staff', Controller.Staff.create);
router.post('/staff/delete', Controller.Staff.destroy);

router.get('/files', Controller.Files.index);
router.post('/files', Controller.Files.upload);

router.get('/account', Controller.AdminAccount.index);
router.post('/account', Controller.AdminAccount.update);

router.get('/christedu', Controller.ChristEdu.index);
router.post('/christedu/create', Controller.ChristEdu.create);
router.post('/christedu/delete', Controller.ChristEdu.destroy);

router.get('*', Controller.MainDash.index);

module.exports = router;

