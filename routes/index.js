const express = require('express');
const router = express.Router();

/*
 * Controller references
 */
const Homepage = require('../app/http/controllers/Homepage');




/*
 * Routes
 */

// GET home page.
router.get('/', Homepage.index);






module.exports = router;
