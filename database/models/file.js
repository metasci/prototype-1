'use strict';
module.exports = (sequelize, DataTypes) => {
    var File = sequelize.define('File', {
        bulletin: DataTypes.TEXT,
        refrigerator: DataTypes.TEXT,
        newsletter: DataTypes.TEXT,
        constitution: DataTypes.TEXT,
        annual_report: DataTypes.TEXT,
        boards_teams: DataTypes.TEXT,
        audiofile: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getFiles: function(columns) {
                return this.findOne({attributes:columns}).then(result => {
                    return result.get();
                });
            }
        }
    });
    return File;
};