


module.exports = {
	

	index: (req, res, next) => {
		
		res.locals.highlights = [
			{date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"4-24-18", time:"11:00 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-1-18", time:"11:30 AM", description:"Ante turpis integer aliquet porttitor."},
			{date:"5-14-18", time:"10:00 AM", description:"Ante turpis integer aliquet porttitor."}
		];
		res.locals.headerClass = 'alt';

		res.locals.newsletter = "https://www.w3schools.com";

		res.locals.audio = "";

		res.locals.annualQuote = decodeURI("%3Cp%3EAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.%3C/p%3E");

		res.locals.pastorQuote = "Nam velit et lorem porta quis at pulvinar tellus nibh";

		res.locals.mission = "Nam velit et lorem porta quis at pulvinar tellus nibh Nam velit et lorem porta quis at pulvinar tellus nibh";

		res.render('pages/public/index');
	}

}
