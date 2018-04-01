'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wedding = sequelize.define('Wedding', {
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Wedding;
};