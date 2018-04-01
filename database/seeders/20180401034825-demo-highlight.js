'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Highlights', [
        {
        date: '2018-04-21', //YYYY-MM-DD
        time: '13:30:00',   //hh:mm:ss
        description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-04-24', //YYYY-MM-DD
          time: '13:00:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-03', //YYYY-MM-DD
          time: '12:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-05', //YYYY-MM-DD
          time: '13:45:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-05', //YYYY-MM-DD
          time: '15:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-08', //YYYY-MM-DD
          time: '13:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-10', //YYYY-MM-DD
          time: '12:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-13', //YYYY-MM-DD
          time: '13:00:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-20', //YYYY-MM-DD
          time: '18:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
        {
          date: '2018-05-21', //YYYY-MM-DD
          time: '13:30:00',   //hh:mm:ss
          description: "Ante turpis integer aliquet porttitor."
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Highlights', null, {});

  }
};
