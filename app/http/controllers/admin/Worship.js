
module.exports = {
	
	index: (req, res, next) => {

		res.locals.times = {
			communion: ["11 AM saturday","12 AM sunday"],
			service: ["1 PM wednesday", "4 PM friday"]
		}
		
		res.locals.docs = {
			bulletin: "https://www.google.com",
			refrigerator: "https://www.stackoverflow.com"
		}

	  res.render('pages/admin/worship');
	}
}
