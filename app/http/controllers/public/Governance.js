const root = require('app-root-path');
const models = require(root + '/database/models');

module.exports = {

    /**
     * Retreive Staff info from database and display public page
     */
    index: (req, res, next) => {

        getData().then(data => {

            res.locals.data = data;
            res.render('pages/public/governance');

        });
    }
}

function getData() {
    return models.File.getFiles(['constitution', 'annual_report', 'boards_teams']).then(files => {
        return files;
    });
}