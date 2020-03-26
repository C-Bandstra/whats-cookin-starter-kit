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
      let match = this.favoriteRecipes.filter(recipe => clickedRecipe = recipe)
      let index = this.favoriteRecipes.indexOf(match)
      this.favoriteRecipes.splice(index)
    }
  }

  updateRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    } else {
      let match = this.recipesToCook.filter(recipe => clickedRecipe = recipe)
      let index = this.recipesToCook.indexOf(match)
      this.recipesToCook.splice(index)
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}