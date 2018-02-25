const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest');

describe('#Google Calendar', () =>{

    it('Should load a google calendar', done => {
        request('https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showPrint=0&height=800&wkst=1&bgcolor=%23ffffff&src=clintonunitedchurchofchrist%40gmail.com&color=%231B887A&src=m8ef9rvrk7dmh4snuhs3tbok28%40group.calendar.google.com&color=%2323164E&ctz=America%2FNew_York').get('/')
            .expect(200)
            .expect(/function _onload()/, done);    // function is unique to google calendar
    });

});
