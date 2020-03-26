class Pantry {
  constructor(userIngredients, allIngredients) {
    this.userIngredients = userIngredients;
    this.allIngredients = allIngredients;
  }

  checkPantryForIngredients(currentRecipe) {
    let ingredientsOnHand = []
    let haveIngredients = currentRecipe.ingredients.filter(ingredient => {
      return this.userIngredients.map(userIngredient => {
        if (ingredient.id === userIngredient.ingredient && ingredient.quantity.amount <= userIngredient.amount) {
          ingredientsOnHand.push(ingredient)
        }
      });
    })
    return ingredientsOnHand;
  }


  findNeededIngredients(currentRecipe) {
    let ingredientsNeeded = []
    let needIngredients = currentRecipe.ingredients.filter(ingredient => {
      return this.userIngredients.map(userIngredient => {
        if (ingredient.id === userIngredient.ingredient && ingredient.quantity.amount > userIngredient.amount) {
          ingredientsNeeded.push(ingredient)
        }
      });
    })
    return ingredientsNeeded;
}

  removeRecipeIngredients() {
    //remove ingredients from pantry once recipe has been started
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
