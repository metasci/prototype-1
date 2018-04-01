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

router.get('/weddings', Controller.Weddings.index);

router.get('/contact', Controller.Contact.index);

router.get('/staff', Controller.Staff.index);

router.get('/music', Controller.Music.index);


// db access example
router.get('/db', (req, res)=>{

	models.User.findAll()
		.then((users) => {
			res.send(users);
		});

	  
});

router.get('*', Controller.Homepage.index);




module.exports = router;
