const express = require('express');
const router = express.Router();

/*
 * Controller references
 */
const Homepage = require('../app/http/controllers/Homepage');


const models = require('../database/models');

	   



/*
 * Routes
 */

// GET home page.
router.get('/', Homepage.index);

router.get('/db', (req, res)=>{

	models.User.findAll()
		.then((users) => {
			res.send(users);
		});

	  
});




module.exports = router;
