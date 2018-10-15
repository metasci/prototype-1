const root = require('app-root-path');
const models = require(root + '/database/models');
const logger = require(root + '/libs/logger/logger');

module.exports = {

    /**
     * Retreive Staff info from database and display public page
     */
    index: (req, res, next) => {

        getData()
            .then(data => {
                res.locals.data = data;
            })
            .catch(err => {
                logger.error("(public) Governance index " + err);
            })
            .then(() => {
                res.render('pages/public/governance');
            });
    }
};

function getData() {
    return models.File.getFiles(['constitution', 'annual_report', 'boards_teams']).then(files => {
        return files;
    });
}