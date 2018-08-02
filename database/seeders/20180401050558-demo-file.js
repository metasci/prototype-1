'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Files', [{
            bulletin: 'test_bulletin.pdf',
            refrigerator: 'test_fridge.pdf',
            newsletter: 'test_newsletter.pdf',
            annual_report: 'test_annual_report.pdf',
            constitution: 'test_constitution.pdf',
            boards_teams: 'test_boards_teams.pdf',
            audiofile: 'test_audio.mp3',
            weddings: 'test_weddings.pdf',
            outreach: 'test_outreach.pdf'
        }], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Files', null, {});

    }
};
