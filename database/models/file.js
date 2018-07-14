'use strict';
module.exports = (sequelize, DataTypes) => {
    var File = sequelize.define('File', {
        bulletin: DataTypes.TEXT,
        refrigerator: DataTypes.TEXT,
        newsletter: DataTypes.TEXT,
        audiofile: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getFiles: function() {
                return this.findOne().then(result => {
                    let files = {}
                    files.docs = {};
                    files.docs.bulletin = result.get().bulletin;
                    files.docs.refrigerator = result.get().refrigerator;
                    files.docs.newsletter = result.get().newsletter;

                    files.audio = result.get().audiofile;
                    return files;
                });
            }
        }
    });
    return File;
};