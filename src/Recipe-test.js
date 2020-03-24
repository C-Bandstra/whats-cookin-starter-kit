const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');


describe('Recipe', function() {
  it('should be a function', function() {
    var recipe = new Recipe();

    expect(Recipe).to.be.a('function');
  })
})
