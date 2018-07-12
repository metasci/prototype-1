'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Admins', [{
      username: 'admin',
      passwd: "$2a$10$HK2RMCTVTaOPXxvuu.V10ehphQJp6nu8Uw1WZ82OoHWYqTyWXWmjG"
    }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
