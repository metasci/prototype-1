'use strict';
module.exports = (sequelize, DataTypes) => {
    var Service = sequelize.define('Service', {
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getServiceDescription: function() {
                return this.findOne({attributes: ['description']}).then(results => {
                    return decodeURI(results.get().description);
                });
            }
        }
    });
    return Service;
};