'use strict';
module.exports = (sequelize, DataTypes) => {
  var Homepage = sequelize.define('Homepage', {
    mission: DataTypes.TEXT,
    pastor_quote: DataTypes.TEXT,
    annual_msg: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Homepage;
};