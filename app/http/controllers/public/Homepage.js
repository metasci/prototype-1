


module.exports = {
	

	index: (req, res, next) => {
		
		let highlights = [
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

		res.render('pages/public/index', { headerClass: 'alt', highlights:highlights});
	}

}
