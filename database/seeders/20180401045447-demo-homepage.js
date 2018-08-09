'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Homepages', [
        {
          mission: "As prayerful disciples of the living God, we are a welcoming community of faith; inspiring in all the love of Jesus Christ and serving our neighbors near and far with compassion.",
          pastor_quote: "Come join us as we grow together in Christ, serve our community and the world, and worship God.",
          annual_msg: "%3Cp%3E%3Cspan%20style=%22color:%20rgb(34,%2034,%2034);%22%3EWelcome%20to%20Clinton%20United%20Church%20of%20Christ.&nbsp;In%202018,%20we%20are%20celebrating%20our%20175th%20anniversary.&nbsp;That%20means%20we%20have%20been%20serving%20the%20community%20of%20Clinton%20and%20the%20surrounding%20area%20for%20a%20really%20long%20time.&nbsp;We%20are%20here%20to%20help%20one%20another,%20to%20support%20one%20another%20and%20to%20be%20Christ%E2%80%99s%20hands%20and%20feet%20in%20the%20world%20together.&nbsp;To%20go%20where%20God%20leads%20us,%20because%20you%20see,%20we%20believe%20we%20should%20never%20put%20a%20period%20where%20God%20has%20placed%20a%20comma%20and%20that%20God%20is%20still%20speaking%20to%20and%20through%20each%20of%20us.&nbsp;God%20is%20working%20through%20everyday%20people%20like%20you%20and%20me%20to%20create%20a%20%E2%80%9CJust%20World%20for%20all.%E2%80%9D&nbsp;This%20is%20who%20we%20are%20and%20how%20we%20strive%20to%20serve.&nbsp;We%20invite%20all%20to%20join%20us%20in%20our%20mission.%3C/span%3E%3C/p%3E"
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Homepages', null, {});
    
  }
};
