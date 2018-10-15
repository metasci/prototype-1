const root 			= require('app-root-path');
const models 		= require(root + '/database/models');
const fs 			= require('fs');
const formidable 	= require('formidable');
const logger = require(root + '/libs/logger/logger');


/**
 * helper functions
 */

// delete directory contents
function cleardir(dir){
	return new Promise((resolve, reject) => {
		let count = 0;
		fs.readdir(dir, (err, docs) => {
			if (err) reject(err);
			if(docs.length == 0) resolve();
			for (let doc of docs) {
				fs.unlink(`${dir}/${doc}`, err => {
					if(err) reject(err);
					count++;
					console.log(count);
					if(count == docs.length) resolve();
				});
			}
		});
	});
}



module.exports = {
	
	/**
	 * DISPLAY FILE UPLOAD PAGE
	 */
	index: (req, res, next) => {
	  res.render('pages/admin/files');
	},


	/**
	 * File uploads
	 */
	upload: (req, res, next) => {


		let form = new formidable.IncomingForm();
		form.parse(req, (err, fields, files) => {
			if(err) throw err;

			let newFiles = {};

			for(let key in files){
				// only the files that were submitted
				if(files[key].size > 0) {
					newFiles[key] = files[key].name;

					cleardir(`${root}/public/storage/uploads/${key}`)
                        .then(()=>{
                            // save files to respective directories
                            let oldpath = files[key].path;
                            let newpath = `${root}/public/storage/uploads/${key}/${files[key].name}`;
                            fs.copyFile(oldpath, newpath, err => {
                                if(err) reject(err);
                                fs.unlink(oldpath, err => {
                                    if(err) throw err;
                                });
                            });
                        })
                        .catch(err => {
                            logger.error("(admin) Files.upload: " + err);
                        });
				}
			}
			// save names of uploaded files to db
			models.File.findOne().then(files => {
				files.update(newFiles).then(()=>{
					res.redirect('/admin/files');
				});
			});
		});
	}
}
