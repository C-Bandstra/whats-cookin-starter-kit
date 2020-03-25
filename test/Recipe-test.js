const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');



describe('Recipe', function() {

  let sampleRecipes = sampleRecipe;
  let sampleIngredients = sampleIngredient;

  beforeEach(function() {
    recipe = new Recipe(sampleRecipes[0]);
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
    recipe.getIngredientsByID();

    expect(recipe.getIngredientsByID()).to.equal([{}])
  })
})
