'use strict';
module.exports = (sequelize, DataTypes) => {
  var ServiceTime = sequelize.define('ServiceTime', {
    time: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ServiceTime;
};