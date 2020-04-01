class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];

  }

  updateFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    } else {
      let index = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(index)
    }
  }

  updateRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    } else {
      let index = this.recipesToCook.indexOf(match)
      this.recipesToCook.splice(index)
    }
  }

  determineFilterType(recipesToFilter, filterBy, typeOfFilter) {
    if(typeOfFilter === 'ingredients'){
      return this.filterByIngredient(recipesToFilter, filterBy, typeOfFilter);
    } else {
      return this.filterByTypeOrName(recipesToFilter, filterBy, typeOfFilter);
    }
  }

  filterByIngredient(recipesToFilter, filterBy, typeOfFilter) {
    let matching = []
    recipesToFilter.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        testIngredients.filter(testIngredient => {
          if(testIngredient.id === ingredient.id && testIngredient.name === filterBy) {
           matching.push(recipe);
        }
      })
    })
  })
    return matching;
  }

  filterByTypeOrName(recipesToFilter, filterBy, typeOfFilter) {
    let filteredRecipes = recipesToFilter.reduce((recipeList, recipe) => {
      if (recipe[typeOfFilter].includes(filterBy)) {
      recipeList.push(recipe)
    }
      return recipeList
    },[]);
    return filteredRecipes;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
