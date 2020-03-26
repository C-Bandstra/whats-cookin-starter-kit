const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');



describe('Recipe', function() {

  const sampleRecipes = sampleRecipe;
  const sampleIngredients = sampleIngredient;

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

  it('should get the cost of all of the ingredients', function() {
    let recipe2 = new Recipe(sampleRecipe[0]);

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
