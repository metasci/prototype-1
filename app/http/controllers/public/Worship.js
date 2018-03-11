
module.exports = {
	
	index: (req, res, next) => {
	
		let info = {
			communion: ["11 AM saturday","12 AM sunday"],
			service: ["1 PM wednesday", "4 PM friday"]
		}
		
		let docs = {
			bulletin: "https://www.google.com",
			refrigerator: "https://www.stackoverflow.com"
		}
		res.render('pages/public/worship', {times:info, docs:docs});
	}

}
