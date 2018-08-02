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

		models.Rental.findOne().then(rental =>{
			rental.update({description: req.body.description})
				.then(()=>{
					res.sendStatus(200);
				});
		});
	}
}

function getData() {
    let promises = [
        models.Rental.getRentalDetails(),
        models.File.getFiles(['weddings'])
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};

            data.rentals = values[0];
            data.weddingBrochure = values[1].weddings;

            return data;
        });
}
