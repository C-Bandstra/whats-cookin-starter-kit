const ingredientsData = require('../test/sampleIngredient');


class Pantry {
  constructor(userIngredients) {
    this.userIngredients = userIngredients;
  }

  findMatchingIngredient(ingredient) {
    return this.userIngredients.find(item => item.ingredient === ingredient.id);
  }

  addName(ingredient) {
    let ingredientName = ingredientsData.find(item => {
      if (item.id === ingredient.ingredient) {
        ingredient['name'] = item.name;
        return 'name', item;
      }
    })
    return ingredientName.name;
  }

  findNeededIngredients(currentRecipe) {
    let requiredIngredients = currentRecipe.ingredients.map(ingredient => {
      this.addName(ingredient)
      let requiredAmount = ingredient.quantity.amount
      let userAmount = this.findMatchingIngredient(ingredient) ?
        this.findMatchingIngredient(ingredient).amount : 0
      ingredient['amountNeeded'] = requiredAmount - userAmount
      return ingredient
    })
    return requiredIngredients.filter(ingredient => ingredient.amountNeeded > 0)
  }

  removeRecipeIngredients(currentRecipe) {
    let recipeIngredients = this.checkPantryForIngredients(currentRecipe);
    let userPantry = this.userIngredients
    let adjustedPantry = userPantry.filter(usedIngredient => {
      return recipeIngredients.map(ingredient => {
        if (ingredient.id === usedIngredient.ingredient)
          usedIngredient.amount -= ingredient.quantity.amount;
      });
    })
    return adjustedPantry
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
