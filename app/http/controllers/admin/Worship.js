
module.exports = {
	
	index: (req, res, next) => {

		res.locals.times = {
			service: ["1 PM wednesday", "4 PM friday"]
		}
		
		res.locals.docs = {
			bulletin: "https://www.google.com",
			refrigerator: "https://www.stackoverflow.com",
			newsletter: "https://www.w3schools.com"
		}

	  res.render('pages/admin/worship');
	}
}
