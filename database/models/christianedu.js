'use strict';
module.exports = (sequelize, DataTypes) => {
    var ChristianEdu = sequelize.define('ChristianEdu', {
        title: DataTypes.TEXT,
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getChristianEdu: function () {
                return this.findAll({attributes: ['title', 'description']}).then(results => {
                    let christEdu = {};
                    results.forEach(item => {
                        christEdu[item.get().title] = decodeURI(item.get().description);
                    });
                    return christEdu;
                });
            }
        }
    });
    return ChristianEdu;
};