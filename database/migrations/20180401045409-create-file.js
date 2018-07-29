'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Files', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bulletin: {
                type: Sequelize.TEXT
            },
            refrigerator: {
                type: Sequelize.TEXT
            },
            newsletter: {
                type: Sequelize.TEXT
            },
            constitution: {
                type: Sequelize.TEXT
            },
            annual_report: {
                type: Sequelize.TEXT
            },
            boards_teams: {
                type: Sequelize.TEXT
            },
            audiofile: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Files');
    }
};