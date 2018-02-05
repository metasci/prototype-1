const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest')(app);


describe('Public Homepage route', () => {
    it('returns the homepage', done => {
        request.get('/')
            .expect(200)
            .expect(/Heading/, done);
    });
});
