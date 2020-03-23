class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.type = recipe.type;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  getCost() {
    //add ingredient prices together
  }

  getInstructions() {
    //return this.instructions
  }
}

module.exports = Recipe
