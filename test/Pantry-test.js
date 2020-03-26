const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');
const sampleUser = require('../test/sampleUser');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');

describe('Pantry', function() {

  beforeEach(function() {
    recipe = new Recipe(sampleRecipe[1]);
    user = new User(sampleUser[0].id, sampleUser[0].name, sampleUser[0].pantry);
    pantry = new Pantry(user.pantry, sampleIngredient);
  });

  it('should be a function', function() {
    pantry = new Pantry();

    expect(Pantry).to.be.a('function')
  })

  it.only('should check pantry for needed ingredients' , function() {
    // console.log('test', pantry.findNeededIngredients());
    pantry.checkPantryForIngredients();

    expect(pantry.checkPantryForIngredients()).to.deep.equal([
  { id: 100, quantity: { amount: 1, unit: 'c' } },
  { id: 200, quantity: { amount: 1, unit: 'tsp' } }
])
  })

  it('should check pantry for needed ingredients', function() {
    pantry.findNeededIngredients();

    expect(pantry.findNeededIngredients).to.deep.equal()
  } )
})
