const express       = require('express');
const router        = express.Router();
const Controller    = require('../app/http/controllers').public;
const models        = require('../database/models');

	   

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

router.get('/rentals', Controller.Rentals.index);

router.get('/contact', Controller.Contact.index);

router.get('/staff', Controller.Staff.index);


// db access example
router.get('/db', (req, res)=>{

	models.User.findAll()
		.then((users) => {
			res.send(users);
		});

	  
});




module.exports = router;
