const express       = require('express');
const router        = express.Router();
const Controller    = require('../app/http/controllers').public;


	   

/*
 * Routes
 */

// GET home page.
router.get('/', Controller.Homepage.index);


router.get('/calendar', Controller.Calendar.index);

router.get('/ministries', Controller.Ministries.index);

router.get('/about', Controller.About.index);

router.get('/photos', Controller.Photos.index);

router.get('/worship', Controller.Worship.index);

router.get('/christedu', Controller.ChristEdu.index);

router.get('/rentals', Controller.Rentals.index);

router.get('/contact', Controller.Contact.index);
router.post('/contact', Controller.Contact.send);

router.get('/staff', Controller.Staff.index);

router.get('/governance', Controller.Governance.index);





router.get('*', Controller.Homepage.index);




module.exports = router;
