


module.exports = {
	
	index: (req, res, next) => {

		res.locals.highlights = [
			{id:1,date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:2,date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:3,date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:4,date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:5,date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:6,date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:7,date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:8,date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{id:9,date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."}
		];

		res.locals.annualMsg = decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E");

		res.locals.pastorQuote = "Nam velit et lorem porta quis at pulvinar tellus nibh";

		res.locals.mission = "Nam velit et lorem porta quis at pulvinar tellus nibh Nam velit et lorem porta quis at pulvinar tellus nibh";

		res.render('pages/admin/homepage');
	},


	addHighlight: (req, res, next) => {

		let newHighlight = {
			date: req.body.date,
			time: req.body.time,
			description: req.body.description 
		}

		// add this new highlight to the database
		console.log(newHighlight);

		res.redirect('/admin/homepage');
	},

	updateAnnual: (req, res, next) => {
		console.log(req.body.description);

		res.sendStatus(200);
	},

	updatePastorQuote: (req, res, next) => {
		console.log(req.body.quote);

		res.redirect('/admin/homepage');
	},

	updateMission: (req, res, next) => {
		console.log(req.body.mission);

		res.redirect('/admin/homepage');
	},

	deleteHighlight: (req, res, next) => {
		console.log(req.body.id);

		res.redirect('/admin/homepage');
	}
}
