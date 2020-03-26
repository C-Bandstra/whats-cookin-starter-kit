class Pantry {
  constructor(userIngredients, allIngredients) {
    this.userIngredients = userIngredients;
    this.allIngredients = allIngredients;
  }

  checkPantryForIngredients() {
    let neededIngredients = recipe.ingredients.filter(ingredient => {
      return this.userIngredients.map(userIngredient => {
        if (ingredient.id === userIngredient.ingredient) {
        }
      });
    })
    return neededIngredients;
  }


  // findNeededIngredients() {
  //   let neededIngredients = this.checkPantryForIngredients();
  //   neededIngredients.forEach((ingredient) => {
  //     console.log('in pantry', this.userIngredients);
  //     return ingredient.quantity.amount;
  //   });
  // }

  removeRecipeIngredients() {
    //remove ingredients from pantry once recipe has been started
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
