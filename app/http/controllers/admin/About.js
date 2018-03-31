
module.exports = {
	
	index: (req, res, next) => {
		
		res.locals.about = decodeURI("%3Cp%3EVis%20accumsan%20feugiat%20adipiscing%20nisl%20amet%20adipiscing%20accumsan%20blandit%20accumsan%20sapien%20blandit%20ac%20amet%20faucibus%20aliquet%20placerat%20commodo.%20Interdum%20ante%20aliquet%20commodo%20accumsan%20vis%20phasellus%20adipiscing.%20Ornare%20a%20in%20lacinia.%20Vestibulum%20accumsan%20ac%20metus%20massa%20tempor.%20Accumsan%20in%20lacinia%20ornare%20massa%20amet.%20Ac%20interdum%20ac%20non%20praesent.%20Cubilia%20lacinia%20interdum%20massa%20faucibus%20blandit%20nullam.%20Accumsan%20phasellus%20nunc%20integer.%20Accumsan%20euismod%20nunc%20adipiscing%20lacinia%20erat%20ut%20sit.%20Arcu%20amet.%20Id%20massa%20aliquet%20arcu%20accumsan%20lorem%20amet%20accumsan.%3C/p%3E%3Cp%3EAmet%20nibh%20adipiscing%20adipiscing.%20Commodo%20ante%20vis%20placerat%20interdum%20massa%20massa%20primis.%20Tempus%20condimentum%20tempus%20non%20ac%20varius%20cubilia%20adipiscing%20placerat%20lorem%20turpis%20at.%20Aliquet%20lorem%20porttitor%20interdum.%20Amet%20lacus.%20Aliquam%20lobortis%20faucibus%20blandit%20ac%20phasellus.%20In%20amet%20magna%20non%20interdum%20volutpat%20porttitor%20metus%20a%20ante%20ac%20neque.%20Nisi%20turpis.%20Commodo%20col.%20Interdum%20adipiscing%20mollis%20ut%20aliquam%20id%20ante%20adipiscing%20commodo%20integer%20arcu%20amet%20Ac%20interdum%20ac%20non%20praesent.%20Cubilia%20lacinia%20interdum%20massa%20faucibus%20blandit%20nullam.%20Accumsan%20phasellus%20nunc%20integer.%20Accumsan%20euismod%20nunc%20adipiscing%20lacinia%20erat%20ut%20sit.%20Arcu%20amet.%20Id%20massa%20aliquet%20arcu%20accumsan%20lorem%20amet%20accumsan%20commodo%20odio%20cubilia%20ac%20eu%20interdum%20placerat%20placerat%20arcu%20commodo%20lobortis%20adipiscing%20semper%20ornare%20pellentesque.%3C/p%3E%3Cp%3EAmet%20nibh%20adipiscing%20adipiscing.%20Commodo%20ante%20vis%20placerat%20interdum%20massa%20massa%20primis.%20Tempus%20condimentum%20tempus%20non%20ac%20varius%20cubilia%20adipiscing%20placerat%20lorem%20turpis%20at.%20Aliquet%20lorem%20porttitor%20interdum.%20Amet%20lacus.%20Aliquam%20lobortis%20faucibus%20blandit%20ac%20phasellus.%20In%20amet%20magna%20non%20interdum%20volutpat%20porttitor%20metus%20a%20ante%20ac%20neque.%20Nisi%20turpis.%20Commodo%20col.%20Interdum%20adipiscing%20mollis%20ut%20aliquam%20id%20ante%20adipiscing%20commodo%20integer%20arcu%20amet%20blandit%20adipiscing%20arcu%20ante.%3C/p%3E");
		
		res.render('pages/admin/about');
	},

	create: (req, res, next) => {
		let newAbout = req.body.description;

		console.log(newAbout);
		// add new about info to database here
		
		res.sendStatus(200);
	}
}
