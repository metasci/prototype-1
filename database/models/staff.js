'use strict';
module.exports = (sequelize, DataTypes) => {
  var Staff = sequelize.define('Staff', {
    photo: DataTypes.TEXT,
    name: DataTypes.TEXT,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Staff;
};