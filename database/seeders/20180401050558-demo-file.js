'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Files', [{
      bulletin: 'test_bulletin.pdf',
      refrigerator: 'test_fridge.pdf',
      newsletter: 'test_newsletter.pdf',
      audiofile: 'test_audio.mp3'
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Files', null, {});
   
  }
};
