const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	/**
	 * Retrieve wedding info to display on admin dash
	 */
	index: (req, res, next) => {
        getData().then(data => {
            res.locals.data = data;
            res.render('pages/admin/rentals');
        });
	},
	
	/**
	 * respond to post
	 * add new wedding info to database
	 */
	create: (req, res, next) => {

		models.Wedding.findOne().then(wedding =>{
			wedding.update({description: req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	}
}

function getData() {
    let promises = [
        models.Wedding.getWeddingDetails()
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};
            data.weddings = values[0];
            return data;
        });
}
