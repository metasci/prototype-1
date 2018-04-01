'use strict';
module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define('Photo', {
    photo: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Photo;
};