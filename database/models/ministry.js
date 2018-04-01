'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ministry = sequelize.define('Ministry', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ministry;
};