const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest')(app);


describe('#Public Homepage route', () => {
    it('returns the homepage', done => {
        request.get('/')
            .expect(200)
            .expect(/Heading/, done);
    });
});


describe("#404 Not Found", () => {
    it('fake route should respond with 404', done => {
        request.get('/fake-route')
            .expect(404, done);
    });
});
