'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Highlights', [
        {
        date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
        description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2017-01-02T13:03:00.000Z', //YYYY-MM-DD
          description: "Ante turpis integer aliquet porttitor."
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Highlights', null, {});

  }
};
