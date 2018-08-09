'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Music', [
      {
        title: "Choir",
        description: "%3Cp%3EAll%20are%20welcome%20to%20join%20the%20choir.%20The%20choir%20rehearsals%20are%20in%20the%20sanctuary%20on%20Thursday%20evening%20beginning%20at%207:00PM.%20The%20choir%20meets%20at%209:00AM%20on%20Sunday%20mornings%20to%20prepare%20for%20worship.%20Each%20year%20rehearsals%20begin%20sometime%20in%20October%20for%20the%20December%20Christmas%20Cantata.%20We%20invite%20all%20in%20the%20community%20who%20%20enjoy%20singing%20to%20join%20us%20in%20the%20preparation%20and%20presentation%20of%20the%20Christmas%20Cantata.%3C/p%3E"
      },
      {
        title: "Hand Bells",
        description: "%3Cp%3EOur%20hand%20bell%20choir%20rehearses%20on%20Thursday%20evening%20at%206:00PM.%20Please%20contact%20the%20church%20office%20if%20you%20are%20interested%20in%20joining%20the%20hand%20bells%20and%20the%20music%20director%20will%20contact%20you.%3C/p%3E"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Music', null, {});
    
  }
};
