'use strict';
module.exports = (sequelize, DataTypes) => {
  var Music = sequelize.define('Music', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Music;
};