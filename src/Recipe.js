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
    return this.ingredients.map((ingredient) => ingredient.id);
  }

  getIngredientsByID() {
    let listOfIngredients = this.getIngredientIds();
      sampleIngredient.map((ingredient) => {
        if();
      });
      // listOfIngredients.foreach((ingredient) => {
      // },);
  }

  getCost() {
    // for (var i = 0; i < this.ingredients.length; i++) {
      // if ()
  // }
 }

  getInstructions() {
    //return this.instructions
  }
};

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
