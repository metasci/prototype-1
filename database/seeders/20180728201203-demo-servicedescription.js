'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ServiceDescriptions', [
            {
                title: "Regular Sunday Service",
                description: "%3Cp%3ECommunion%20is%20offered%20on%20the%203%20rd%20Sunday%20of%20each%20month.%20We%20observe%20World%20Wide%20Communion%20on%20the%201%20st%20Sunday%20in%20October.%20All%20are%20welcome%20at%20the%20Lord%E2%80%99s%20Table%20here%20at%20Clinton%20UCC;%20Jesus%20excluded%20no%20one%20and%20neither%20do%20we.%3C/p%3E%3Cp%3E%0AEach%20Sunday,%20all%20are%20invited%20to%20join%20us%20following%20the%20service%20for%20food%20and%20fellowship.%0A%3C/p%3E"
            },
            {
                title: "Blue Christmas",
                description: "%3Cp%3EBlue?%20Yes,%20blue%20as%20in%20the%20blues.%20As%20in%20&amp;quot;I%20am%20feeling%20blue.&amp;quot;%20Not%20everyone%20is%20up%20and%20cheery%20for%20the%20Christmas%20holidays.%20Dealing%20with%20the%20death%20of%20a%20loved%20one,%20facing%20life%20after%20divorce%20or%20separation,%20coping%20with%20the%20loss%20of%20a%20job,%20living%20with%20cancer%20or%20some%20other%20disease%20that%20puts%20a%20question%20mark%20over%20the%20future,%20and%20a%20number%20of%20other%20human%20situations%20make%20parties%20and%20joviality%20painful%20for%20many%20people%20in%20our%20congregations%20and%20communities.%20There%20is%20a%20growing%20attentiveness%20to%20the%20needs%20of%20people%20who%20are%20blue%20at%20Christmas.%20This%20is%20why%20we%20at%20Clinton%20United%20Church%20Christ%20create%20sacred%20space%20for%20people%20living%20through%20dark%20times.%20The%20service%20is%20reflective,%20accepting%20where%20we%20really%20are,%20and%20holding%20out%20healing%20and%20hope%20for%20all.%3C/p%3E"
            },
            {
                title: "Christmas Eve",
                description: "%3Cp%3EWe%20offer%20worship%20at%207:00p.m.%20and%2011:00p.m.%20on%20Christmas%20Eve.%3C/p%3E"
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ServiceDescriptions', null, {});
    }
};

