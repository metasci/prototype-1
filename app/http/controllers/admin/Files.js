
module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/admin/files');
	},


	/**
	 * File uploads
	 */
	upload: (req, res, next) => {

		let files = {
			bulletin: req.body.bulletin,
			fridge: req.body.fridge,
			news: req.body.news,
			audio: req.body.audio
		}

		// store uploaded files here
		console.log(files);

		res.redirect('/admin/files');
	}
}
