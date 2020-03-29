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


  // filterByIngredient(recipesToFilter, filterBy) {
  //   if(typeOfFilter === 'ingredient'){
  //     let filterType = 'id';
  //     recipesToFilter.forEach(singleRecipe => {
  //     recipe.ingredients.map(ingredient => {
  //       this.filterByType(singleRecipe.ingredients, filterType, filterBy );
  //       })
  //     })
  //   } else {
  //     this.filterByType(recipesToFilter, typeOfFilter, filterBy)
  //   }
  // }
  //
  //
  // }

  // filterByName(recipesToFilter, filterBy) {
  //   let filteredRecipes = recipesToFilter.reduce((recipeList, recipe) => {
  //     if (recipe.name.includes(filterBy)) {
  //     recipeList.push(recipe)
  //   }
  //     return recipeList
  //   },[]);
  //     return filteredRecipes;
  // }

  filterByTypeOrName(recipesToFilter, filterBy, typeOfFilter) {
    // console.log('filter', filterBy);
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
