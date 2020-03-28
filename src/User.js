class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  updateFavorites(recipe) {
    console.log('reci[e', recipe);
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    } else {
      let match = this.favoriteRecipes.filter(favRecipe => recipe = favRecipe)
      let index = this.favoriteRecipes.indexOf(match)
      this.favoriteRecipes.splice(index)
    }
  }

  updateRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    } else {
      let match = this.recipesToCook.filter(savedRecipe => recipe = savedRecipe)
      let index = this.recipesToCook.indexOf(match)
      this.recipesToCook.splice(index)
    }
  }

  filterRecipesByType(arr) {
    console.log(arr);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
