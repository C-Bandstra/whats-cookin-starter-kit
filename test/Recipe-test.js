const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');



describe('Recipe', function() {

  beforeEach(function() {
    ingredientsData = sampleIngredient
    recipesData = sampleRecipe
    recipe = new Recipe(recipesData[1]);
  });

  it('should be a function', function() {
    console.log(sampleIngredient);

    expect(Recipe).to.be.a('function');
  });

  it('it should be an instance of recipe', function() {

    expect(recipe).to.be.a.instanceOf(Recipe1);
  });

  it('should get the cost of all of the ingredients', function() {

    expect(recipe.getCost(recipesData)).to.equal('0.00');
  })

  it('should be able to get instructions', function() {
    let recipe2 = new Recipe(sampleRecipe[0]);

    recipe.getInstructions();
    recipe2.getInstructions();

    expect(recipe.getInstructions()).to.equal(recipe.instructions)
    expect(recipe2.getInstructions()).to.equal(recipe2.instructions)
  })
})
