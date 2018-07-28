const root 		= require('app-root-path');
const models 	= require(root + '/database/models');


module.exports = {
	
	index: (req, res, next) => {
		getData().then(data => {
		    res.locals.data = data;
            res.render('pages/public/worship');
        });
	}
}


function getData() {
    let promises = [
        models.ServiceTime.getServiceTimes(),
        models.ServiceDescription.getServiceDescriptions(),
        models.Music.getMusic(),
        models.File.getFiles()
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};
            data.service = {};

            data.service.times = values[0];
            data.service.description = values[1];
            data.musicItem = values[2];
            data.docs = values[3].docs;
            data.audio = values[3].audio;

            return data;
        });
}