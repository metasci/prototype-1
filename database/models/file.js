'use strict';
module.exports = (sequelize, DataTypes) => {
  var File = sequelize.define('File', {
    bulletin: DataTypes.TEXT,
    refrigerator: DataTypes.TEXT,
    newsletter: DataTypes.TEXT,
    audiofile: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return File;
};