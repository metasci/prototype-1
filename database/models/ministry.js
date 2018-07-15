'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ministry = sequelize.define('Ministry', {
        title: DataTypes.TEXT,
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getMinistries: function() {
                return this.findAll().then(results => {
                    let ministry = {};
                    results.forEach(item => {
                        ministry[item.get().title] = decodeURI(item.get().description);
                    });
                    return ministry;
                });
            }
        }
    });
    return Ministry;
};