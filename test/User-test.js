const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const sampleRecipe = require('../test/sampleRecipe');
const sampleIngredient = require('../test/sampleIngredient');
const sampleUser = require('../test/sampleUser');
const Recipe = require('../src/Recipe');




describe('User', function() {

  beforeEach(function() {
    recipe = new Recipe(sampleRecipe[0]);
    recipe1 = new Recipe(sampleRecipe[1]);
    user = new User(sampleUser[0].id, sampleUser[0].name, sampleUser[0].pantry);
  })


  it('should be a function', function() {
    expect(User).to.be.a('function')
  })

  it('should be able to add favorite recipes', function() {
    user.updateFavorites(recipe);
    expect(user.favoriteRecipes[0]).to.equal(recipe);

    user.updateFavorites(recipe1);
    expect(user.favoriteRecipes[1]).to.equal(recipe1);
  })
  it('should be able to remove favorite recipes', function() {
    user.updateFavorites(recipe);
    expect(user.favoriteRecipes[0]).to.equal(recipe);

    user.updateFavorites(recipe);
    expect(user.favoriteRecipes).to.deep.equal([]);
  })
  it('should be able to add recipes to cook ', function() {
    user.updateRecipesToCook(recipe);
    expect(user.recipesToCook[0]).to.equal(recipe);

    user.updateRecipesToCook(recipe1);
    expect(user.recipesToCook[1]).to.equal(recipe1);
  })
  it('should be able to remove recipes to cook', function() {
    user.updateRecipesToCook(recipe);
    expect(user.recipesToCook[0]).to.equal(recipe);

    user.updateRecipesToCook(recipe);
    expect(user.recipesToCook).to.deep.equal([]);
  })
  it.only('should filter recipes by type', function() {
    user.updateFavorites(recipe);
    user.updateFavorites(recipe1);
    // user.filterRecipesByType(user.favoriteRecipes);

    expect(user.filterRecipesByType(user.favoriteRecipes)).to.deep.equal([user.favoriteRecipes[1]])
  })
})
