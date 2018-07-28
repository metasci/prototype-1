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
                return this.findAll({attributes: ['time', 'id']}).then(results => {
                    let times = [];
                    results.forEach(item => {
                        times.push({info:item.get().time, id:item.get().id});
                    });
                    return times;
                });
            }
        }
    });
    return ServiceTime;
};