const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest');
const should    = require('chai').should();

describe('#Daily Devotional Feed', () =>{

    it('Should load an unordered list of daily devotional messages', done => {
        request('http://feeds.feedburner.com/uccdailydevotional?format=sigpro&nItems=10&displayTitle=false').get('/')
            .end((err, res)=>{
                res.text.should.include('\\x3cdiv class\\x3d\\x22feedburnerFeedBlock\\x22');
                done();
            });
    });

});
