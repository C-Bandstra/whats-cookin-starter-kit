class Pantry {
  constructor(userIngredients, allIngredients) {
    this.userIngredients = userIngredients;
    this.allIngredients = allIngredients;
  }

  checkPantryForIngredients() {
    //check to see if user has enough ingredients to cook recipe
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
