const express = require('express');
const router = express.Router();

/*
 * Controller references
 */
const Homepage = require('../app/http/controllers/public/Homepage');
const Calendar = require('../app/http/controllers/public/Calendar'); 
const Ministries = require('../app/http/controllers/public/Ministries'); 
const About = require('../app/http/controllers/public/About');
const Photos = require('../app/http/controllers/public/Photos');
const Worship = require('../app/http/controllers/public/Worship');
const Rentals = require('../app/http/controllers/public/Rentals');
const Contact = require('../app/http/controllers/public/Contact');
const Staff = require('../app/http/controllers/public/Staff');






// models
const models = require('../database/models');

	   



/*
 * Routes
 */

// GET home page.
router.get('/', Homepage.index);

router.get('/calendar', Calendar.index);

router.get('/db', (req, res)=>{

	models.User.findAll()
		.then((users) => {
			res.send(users);
		});

	  
});




module.exports = router;
