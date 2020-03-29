// const sampleIngredient = require('../test/sampleIngredient');


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.type = recipe.tags;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  getCost() {
    let costCounter = 0;
    let result;
    this.ingredients.forEach(ingredient => {
      sampleIngredient.find(specificIngredient => {
        if(specificIngredient.id === ingredient.id) {
          costCounter += specificIngredient.estimatedCostInCents * ingredient.quantity.amount
          result = costCounter;
        }
      })
    });
    return result
  }

  getInstructions() {
    return this.instructions;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
