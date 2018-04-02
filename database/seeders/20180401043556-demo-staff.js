'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Staffs', [
      {
        photo: "diane.jpg",
        name: 'Diane White',
        title: "Pastor",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        photo: "diane.jpg",
        name: 'Phyllis',
        title: "Worker Bee",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        photo: "diane.jpg",
        name: 'Diane White',
        title: "Pastor",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        photo: "diane.jpg",
        name: 'Phyllis',
        title: "Worker Bee",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        photo: "diane.jpg",
        name: 'Diane White',
        title: "Pastor",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        photo: "diane.jpg",
        name: 'Phyllis',
        title: "Worker Bee",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Staffs', null, {});
    
  }
};
