const sampleIngredient = require('../test/sampleIngredient');


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.type = recipe.type;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  getIngredientIds() {
    let ingredientId = this.ingredients.map((ingredient) => ingredient.id);
    return ingredientId
  }

  getIngredient() {
    let recipeIngredients = []
    let listOfIngredients = this.getIngredientIds();
    for (var i = 0; i < listOfIngredients.length; i++) {
      sampleIngredient.map((ingredient) => {
        if(ingredient.id === listOfIngredients[i]) {
          recipeIngredients.push(ingredient);
        }
      })
    }
    return recipeIngredients;
  }

  getCost() {
    let amountOfEach = this.ingredients;
    let recipeIngredients = this.getIngredient();
    let totals = 0
      recipeIngredients.map((ingredient) => {
        amountOfEach.filter((amount) => {
          if(ingredient.id === amount.id) {
            totals += ingredient.estimatedCostInCents * amount.quantity.amount;
        }
      })
    })
    return totals;
  }

  getInstructions() {
    return this.instructions;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
