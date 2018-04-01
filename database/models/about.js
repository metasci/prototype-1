'use strict';
module.exports = (sequelize, DataTypes) => {
  var About = sequelize.define('About', {
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return About;
};