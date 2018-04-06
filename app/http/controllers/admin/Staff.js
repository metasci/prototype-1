const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const fs 			= require('fs');
const formidable 	= require('formidable');
const uniqid 		= require('uniqid');

module.exports = {

	/**
	 * Retreive Staff info from database and display admin page
	 */
	index: (req, res, next) => {
		res.locals.staff = [];
		models.Staff.findAll().then(results => {
			results.forEach(item => {
				let staff = {
					id: item.get().id,
					photo: item.get().photo,
					name: item.get().name,
					title: item.get().title,
					description: item.get().description
				}
				res.locals.staff.push(staff);
			});
		}).finally(()=>{
			res.render('pages/admin/staff');
		});
	},

	/**
	 * ADD NEW STAFF
	 */
	create: (req, res, next) => {
		
		// retrieve file being uploaded
		let file = new formidable.IncomingForm();
		file.parse(req, (err, fields, files) => {
			if(err) throw err;

			// save new staff details
			let newStaff = {
				photo: `${uniqid()}_${files.image.name}`,
				name: fields.name,
				title: fields.title,
				description: fields.description
			}

			// add new Staff to db here
			models.Staff.create(newStaff).then(()=>{

				// save image to root/public/storage/images/staff
				let oldpath = files.image.path;
				let newpath = `${root}/public/storage/images/staff/${newStaff.photo}`;
				fs.copyFile(oldpath, newpath, err => {
					if(err) throw err;
					fs.unlink(oldpath, err => {
						if(err) throw err;
						res.redirect('/admin/staff');
					});
				});

			});
		});	
	},

	/**
	 * DELETE STAFF
	 */
	destroy: (req, res, next) => {

		//remove selected staff from db here
		models.Staff.destroy({where: {id: req.body.id}}).then(result => {
			fs.unlink(`${root}/public${req.body.image}`, err => {
				if(err) throw err;
				res.sendStatus(200);
			});
		});
		
	}
}
