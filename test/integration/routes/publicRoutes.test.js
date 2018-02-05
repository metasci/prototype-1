const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest')(app);


describe('#Public Routes', () => {
    it('returns the homepage', done => {
        request.get('/')
            .expect(200)
            .expect(/Heading/, done);
    });

    it('returns the calendar page', done => {
        request.get('/calendar')
            .expect(200, done);
    });

    it('returns the ministries page', done => {
        request.get('/ministries')
            .expect(200, done);
    });

    it('returns the about page', done => {
        request.get('/about')
            .expect(200, done);
    });

    it('returns the photos page', done => {
        request.get('/photos')
            .expect(200, done);
    });

    it('returns the worship page', done => {
        request.get('/worship')
            .expect(200, done);
    });
    
    it('returns the rentals page', done => {
        request.get('/rentals')
            .expect(200, done);
    });
    it('returns the contact page', done => {
        request.get('/contact')
            .expect(200, done);
    });
    
    it('returns the staff page', done => {
        request.get('/staff')
            .expect(200, done);
    });
});


describe("#404 Not Found", () => {
    it('fake route should respond with 404', done => {
        request.get('/fake-route')
            .expect(404, done);
    });
});
