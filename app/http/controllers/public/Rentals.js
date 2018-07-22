const root 		= require('app-root-path');
const models 	= require(root + '/database/models');

module.exports = {
	
	/**
	 * Retrieve wedding info to display on public
	 */
	index: (req, res, next) => {

	    getData().then(data => {
	        res.locals = data;
            res.render('pages/public/rentals');
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