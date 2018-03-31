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
router.post('/homepage/addhighlight', Controller.Homepage.addHighlight);
router.post('/homepage/updateannual', Controller.Homepage.updateAnnual);
router.post('/homepage/pastorquote', Controller.Homepage.updatePastorQuote);
router.post('/homepage/missionstatement', Controller.Homepage.updateMission);
router.post('/homepage/deletehighlight', Controller.Homepage.deleteHighlight);


router.get('/ministries', Controller.Ministries.index);
router.post('/ministries', Controller.Ministries.create);
router.post('/ministries/delete', Controller.Ministries.destroy);


router.get('/about', Controller.About.index);

router.get('/photos', Controller.Photos.index);

router.get('/worship', Controller.Worship.index);
router.post('/worship/newchristedu', Controller.Worship.createChristEdu);
router.post('/worship/deletechristedu', Controller.Worship.deleteChristEdu);
router.post('/worship/servicedescription', Controller.Worship.createServiceDesc);
router.post('/worship/addservicetime', Controller.Worship.addTime);
router.post('/worship/deleteservicetime', Controller.Worship.deleteTime);
router.post('/worship/files', Controller.Worship.upload);


router.get('/weddings', Controller.Weddings.index);
router.post('/weddings', Controller.Weddings.create);

router.get('/staff', Controller.Staff.index);

router.get('/newsletter', Controller.Newsletter.index);

router.get('/account', Controller.AdminAccount.index);

router.get('/music', Controller.Music.index);
router.post('/music', Controller.Music.create);
router.post('/music/delete', Controller.Music.destroy);


module.exports = router;

