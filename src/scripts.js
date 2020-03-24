let allCardsContainer = document.querySelector('.all-cards')

window.onload = showRecipes();

function showRecipes() {
  recipeData.forEach(recipe => {    
    allCardsContainer.insertAdjacentHTML('beforeend', domInsertions.insertRecipeCard(recipe))
  });
}