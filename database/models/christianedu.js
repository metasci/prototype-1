'use strict';
module.exports = (sequelize, DataTypes) => {
  var ChristianEdu = sequelize.define('ChristianEdu', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChristianEdu;
};