class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.type = recipe.tags;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.cost = this.getCost(this.ingredients);
  }

  getCost(arr) {
    let costCounter = 0;
    let result;
    arr.forEach(ingredient => {
      ingredientsData.find(specificIngredient => {
        // console.log('data', ingredient.id);
        if(specificIngredient.id === ingredient.id) {
          costCounter += specificIngredient.estimatedCostInCents * ingredient.quantity.amount
          result = costCounter;
        }
      })
    });
    result = this.convertCost(costCounter)
    console.log('log', result);
    return result
  }

  convertCost(cost) {
    let dollars = Math.floor(cost / 100)
    let cents = Math.floor(cost % 100)
    cents < 10 ? cents = '0' + cents : cents
    return `${dollars}.${cents}`
  }

  getInstructions() {
    return this.instructions;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
