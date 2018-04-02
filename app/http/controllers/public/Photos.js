const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	index: (req, res, next) => {
		
		res.locals.photos = [];
		
		models.Photo.findAll().then(results => {
			results.forEach(item => {
				let photo = {
					photo: item.get().photo,
					description: item.get().description
				}
				res.locals.photos.push(photo);
			});
		}).finally(()=>{
			res.render('pages/public/photos');
		});
	}
}
