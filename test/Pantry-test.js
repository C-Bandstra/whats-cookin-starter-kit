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
    ingredientsData = sampleIngredient
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
    expect(pantry.findMatchingIngredient(recipe1.ingredients[0])).to.deep.equal({ ingredient: 400, amount: 40 })
    expect(pantry.findMatchingIngredient(recipe.ingredients[1])).to.deep.equal({ ingredient: 200, amount: 20 })
  })

  it('should add a name property to the ingredient', function(){
    pantry.addName(pantry.userIngredients[0])
  })

  it('should return missing ingredients', function() {
    expect(pantry.findNeededIngredients(recipe1)).to.deep.equal([
  {
    id: 400,
    quantity: { amount: 138, unit: 'c' },
    name: 'Apple',
    amountNeeded: 98
  }
]
)
  })

  it('should remove ingredients from the pantry', function() {
    expect(pantry.removeRecipeIngredients(recipe)).to.deep.equal([
  { ingredient: 100, amount: 9 },
  { ingredient: 200, amount: 19 },
  { ingredient: 300, amount: 30 },
  { ingredient: 400, amount: 40 },
  { ingredient: 500, amount: 40 }
]
)
  })
})
