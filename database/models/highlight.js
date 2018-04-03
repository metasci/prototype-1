'use strict';
module.exports = (sequelize, DataTypes) => {
  var Highlight = sequelize.define('Highlight', {
    date: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Highlight;
};