'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Photos', [
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          photo: "/storage/images/photos/diane.jpg",
          description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Photos', null, {});
  
  }
};
