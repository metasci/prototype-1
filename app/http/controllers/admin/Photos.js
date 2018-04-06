const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const fs 			= require('fs');
const formidable 	= require('formidable');
const uniqid 		= require('uniqid');


module.exports = {
	
	/**
	 * Retreive Photo info from database and display admin page
	 */
	index: (req, res, next) => {

		res.locals.photos = [];
		models.Photo.findAll().then(results => {
			results.forEach(item => {
				let photos = {
					id: item.get().id,
					photo: item.get().photo,
					description: item.get().description
				}
				res.locals.photos.push(photos);
			});
		}).finally(()=>{
			res.render('pages/admin/photos');
		});
	},

	/**
	 * ADD NEW PHOTO
	 */
	create: (req, res, next) => {
		
		// retrieve file being uploaded
		let file = new formidable.IncomingForm();
		file.parse(req, (err, fields, files) => {
			if(err) throw err;

			// save new photo details
			let newPhoto = {
				photo: `${uniqid()}_${files.image.name}`,
				description: fields.description
			}

			// add new photo to db here
			models.Photo.create(newPhoto).then(()=>{

				// save image to root/public/storage/images/photos
				let oldpath = files.image.path;
				let newpath = `${root}/public/storage/images/photos/${newPhoto.photo}`;
				fs.copyFile(oldpath, newpath, err => {
					if(err) throw err;

					fs.unlink(oldpath, err => {
						if(err) throw err;
						res.redirect('/admin/photos');
					});
				});

			});
		});	
	},

	/**
	 * DELETE PHOTO
	 */
	destroy: (req, res, next) => {

		//remove selected staff from db here
		models.Photo.destroy({where: {id: req.body.id}}).then(result => {
			fs.unlink(`${root}/public${req.body.image}`, err => {
				if(err) throw err;
				res.sendStatus(200);
			});
		});
		
	}
}
