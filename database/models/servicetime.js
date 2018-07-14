'use strict';
module.exports = (sequelize, DataTypes) => {
    var ServiceTime = sequelize.define('ServiceTime', {
        time: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getServiceTimes: function() {
                return this.findAll({attributes: ['time']}).then(results => {
                    let times = [];
                    results.forEach(item => {
                        times.push(item.get().time);
                    });
                    return times;
                });
            }
        }
    });
    return ServiceTime;
};