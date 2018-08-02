'use strict';
module.exports = (sequelize, DataTypes) => {
    var Rental = sequelize.define('Rental', {
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            getRentalDetails: function() {
                return this.findOne().then(result => {
                    return decodeURI(result.get().description);
                });
            }
        }
    });
    return Rental;
};