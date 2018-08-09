'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('ServiceTimes', [
      {
        time: 'Sunday, 9:45a.m.'
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('ServiceTimes', null, {});
  
  }
};


