const root = require('app-root-path');
const models = require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {

    index: (req, res, next) => {
        getData()
            .then(data => {
                res.locals.data = data;
                res.render('pages/public/worship');
            })
            .catch(err => {
                logger.error("(public) Worship.index: " + err);
            });
    }
};

function getData() {
    let promises = [
        models.ServiceTime.getServiceTimes(),
        models.ServiceDescription.getServiceDescriptions(),
        models.Music.getMusic(),
        models.File.getFiles(['bulletin', 'refrigerator', 'newsletter', 'audiofile'])
    ];

    return Promise.all(promises)
        .then(values => {
            let data = {};
            data.service = {};

            data.service.times = values[0];
            data.service.description = values[1];
            data.musicItem = values[2];
            data.docs = values[3];

            return data;
        });
}