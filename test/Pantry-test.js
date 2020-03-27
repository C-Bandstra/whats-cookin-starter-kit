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
    recipe1 = new Recipe(sampleRecipe[2])
    user = new User(sampleUser[0].id, sampleUser[0].name, sampleUser[0].pantry);
    pantry = new Pantry(user.pantry, sampleIngredient);
  });

  it('should be a function', function() {
    pantry = new Pantry();

    expect(Pantry).to.be.a('function')
  })

  it('should check pantry for needed ingredients' , function() {

    expect(pantry.checkPantryForIngredients(recipe1)).to.deep.equal([])
    expect(pantry.checkPantryForIngredients(recipe)).to.deep.equal([
  { id: 100, quantity: { amount: 1, unit: 'c' } },
  { id: 200, quantity: { amount: 1, unit: 'tsp' } }
])
  })

  it('should return missing ingredients', function() {
    expect(pantry.findNeededIngredients(recipe1)).to.deep.equal([{ id: 400, quantity: { amount: 138, unit: 'c' }}])
  })

  it('should remove ingredients from the pantry', function() {
    expect(pantry.removeRecipeIngredients(recipe)).to.deep.equal([
  { ingredient: 100, amount: 9 },
  { ingredient: 200, amount: 19 },
  { ingredient: 300, amount: 30 },
  { ingredient: 400, amount: 40 }
]
)
  })
})
