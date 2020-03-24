const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');


describe('Pantry', function() {
  it('should be a function', function() {
    pantry = new Pantry();

    expect(Pantry).to.be.a('function')
  })
})
