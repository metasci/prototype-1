
module.exports = {
	
	index: (req, res, next) => {

		res.locals.service = {
			times: [{info:"1 PM wednesday", id:1}, {info:"4 PM friday", id:2}],
			description: decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E")
		}

		res.locals.christedu = {
			"Sunday School": decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E"),
			"Youth Group": decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E")
		}
		
		res.locals.docs = {
			bulletin: "https://www.google.com",
			refrigerator: "https://www.stackoverflow.com",
			newsletter: "https://www.w3schools.com"
		}

	  res.render('pages/admin/worship');
	},


	/**
	 * Christian Education 
	 */
	createChristEdu: (req, res, next) => {
		let newChristEdu = {
			title: req.body.title,
			description: req.body.description
		}
		// add new ministry to database here
		console.log(newChristEdu);

		res.sendStatus(200);
	},

	deleteChristEdu: (req, res, next) => {
		console.log(req.body.title);
		res.sendStatus(200);
	},



	/**
	 * Service
	 */
	createServiceDesc: (req, res, next) => {
		console.log(req.body.description);

		res.sendStatus(200);
	},

	addTime: (req, res, next) => {
		console.log(req.body.time);
		res.redirect('/admin/worship/');
	},

	deleteTime: (req, res, next) => {
		console.log(req.body.id);
		res.sendStatus(200);
	}
}
