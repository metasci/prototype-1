'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ChristianEdus', [
      {
        title: "Sunday School",
        description: "%3Cp%3EVis%20accumsan%20feugiat%20adipiscing%20nisl%20amet%20adipiscing%20accumsan%20blandit%20accumsan%20sapien%20blandit%20ac%20amet%20faucibus%20aliquet%20placerat%20commodo.%20Interdum%20ante%20aliquet%20commodo%20accumsan%20vis%20phasellus%20adipiscing.%20Ornare%20a%20in%20lacinia.%20Vestibulum%20accumsan%20ac%20metus%20massa%20tempor.%20Accumsan%20in%20lacinia%20ornare%20massa%20amet.%20Ac%20interdum%20ac%20non%20praesent.%20Cubilia%20lacinia%20interdum%20massa%20faucibus%20blandit%20nullam.%20Accumsan%20phasellus%20nunc%20integer.%20Accumsan%20euismod%20nunc%20adipiscing%20lacinia%20erat%20ut%20sit.%20Arcu%20amet.%20Id%20massa%20aliquet%20arcu%20accumsan%20lorem%20amet%20accumsan.%3C/p%3E"
      },
      {
        title: "Youth Group",
        description: "%3Cp%3EVis%20accumsan%20feugiat%20adipiscing%20nisl%20amet%20adipiscing%20accumsan%20blandit%20accumsan%20sapien%20blandit%20ac%20amet%20faucibus%20aliquet%20placerat%20commodo.%20Interdum%20ante%20aliquet%20commodo%20accumsan%20vis%20phasellus%20adipiscing.%20Ornare%20a%20in%20lacinia.%20Vestibulum%20accumsan%20ac%20metus%20massa%20tempor.%20Accumsan%20in%20lacinia%20ornare%20massa%20amet.%20Ac%20interdum%20ac%20non%20praesent.%20Cubilia%20lacinia%20interdum%20massa%20faucibus%20blandit%20nullam.%20Accumsan%20phasellus%20nunc%20integer.%20Accumsan%20euismod%20nunc%20adipiscing%20lacinia%20erat%20ut%20sit.%20Arcu%20amet.%20Id%20massa%20aliquet%20arcu%20accumsan%20lorem%20amet%20accumsan.%3C/p%3E"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('ChristianEdus', null, {});
    
  }
};
