const log = console.log;
const root = require('app-root-path');
const should = require('chai').should();
const _ = require('lodash');


/*
 * example unit test
 */
const {
	alwaysTrue
} = require(`${root}/app/http/controllers/Homepage`);

describe('#Homepage Controller', ()=>{
	
	it('Should return true', ()=>{
		alwaysTrue().should.be.true;
	});

});
