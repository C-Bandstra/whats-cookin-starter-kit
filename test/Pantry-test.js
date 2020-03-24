const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');


describe('Pantry', function() {
  it('should be a function', function() {
    pantry = new Pantry({recipe: 23423432, image: "https://spoonacular.com/recipeImages/595736-556x370.jpg", ingredients:  });

    expect(Pantry).to.be.a('function')
  })
})
