const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');



describe('Recipe', function() {

  let sampleRecipes = sampleRecipe;
  let sampleIngredients = sampleIngredient;

  beforeEach(function() {
    recipe = new Recipe(sampleRecipes[1]);
    // ingredient = new Ingredient();
  });

  it('should be a function', function() {

    expect(Recipe).to.be.a('function');
  });

  it('it should be an instance of recipe', function() {

    expect(recipe).to.be.a.instanceOf(Recipe);
  });

  it('should get the id of all recipe ingredients', function() {
    recipe.getIngredientIds();

    expect(recipe.getIngredientIds()).to.deep.equal([100, 200])
  })

  it('should return an array of ingredients objects', function() {
    recipe.getIngredient();

    expect(recipe.getIngredient()).to.deep.equal([
      {
         "estimatedCostInCents": 500,
         "id": 100,
         "name": "banana"
      },
      {
        "estimatedCostInCents": 500,
        "id": 200,
        "name": "anotherBanana"
      }
    ]);
  })

  it('should get the cost of all of the ingredients', function() {
    let recipe2 = new Recipe(sampleRecipe[0]);

    recipe.getCost();
    recipe2.getCost();

    expect(recipe.getCost()).to.equal(1000);
    expect(recipe2.getCost()).to.equal(100);
  })

  it('should be able to get instructions', function() {
    let recipe2 = new Recipe(sampleRecipe[0]);

    recipe.getInstructions();
    recipe2.getInstructions();

    expect(recipe.getInstructions()).to.equal(recipe.instructions)
    expect(recipe2.getInstructions()).to.equal(recipe2.instructions)
  })
})
