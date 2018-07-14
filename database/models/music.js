'use strict';
module.exports = (sequelize, DataTypes) => {
    var Music = sequelize.define('Music', {
        title: DataTypes.TEXT,
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getMusic: function() {
                return this.findAll().then(results => {
                    let musicItem = {};
                    results.forEach(item => {
                        musicItem[item.get().title] = decodeURI(item.get().description);
                    });
                    return musicItem;
                });
            }
        }
    });
    return Music;
};