const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');


describe('User', function() {
  it('should be a function', function() {
    user = new User();

    expect(User).to.be.a('function')
  })
})