'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('ServiceTimes', [
      {
        time: '8 PM Friday'
      },
      {
        time: '5 PM Saturday'
      },
      {
        time: '10 AM Sunday'
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('ServiceTimes', null, {});
  
  }
};
