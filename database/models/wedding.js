'use strict';
module.exports = (sequelize, DataTypes) => {
    var Wedding = sequelize.define('Wedding', {
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            getWeddingDetails: function() {
                return this.findOne().then(result => {
                    return decodeURI(result.get().description);
                });
            }
        }
    });
    return Wedding;
};