'use strict';
module.exports = (sequelize, DataTypes) => {
  var ServiceDescription = sequelize.define('ServiceDescription', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
        getServiceDescriptions: function () {
            return this.findAll({attributes: ['title', 'description']}).then(results => {
                let description = {};
                results.forEach(item => {
                    description[item.get().title] = decodeURI(item.get().description);
                });
                return description;
            });
        }
    }
  });
  return ServiceDescription;
};