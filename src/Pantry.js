class Pantry {
  constructor(userIngredients, allIngredients) {
    this.userIngredients = userIngredients;
    this.allIngredients = allIngredients;
  }

  checkPantryForIngredients() {
    let neededIngredients = recipe.ingredients.filter((ingredient) => {
      return this.userIngredients.map((userIngredient) => {
        if (ingredient.id === userIngredient.ingredient) {
        }
      });
    })
    return neededIngredients;
  }

  findNeededIngredients() {
    // find what ingredients are necessary to cook recipe
  }

  removeRecipeIngredients() {
    //remove ingredients from pantry once recipe has been started
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
