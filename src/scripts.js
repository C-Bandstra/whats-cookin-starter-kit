let allCardsContainer = document.querySelector('.all-cards');
let body = document.querySelector('body');
let homePage = document.querySelector('.home-page');
let addedPage = document.querySelector('.added-page');
let favoritesPage = document.querySelector('.favorites-page');
let instructionsPage = document.querySelector('.instructions-page')
let favRecipes = document.querySelector('.favs-cards');
let addedRecipes = document.querySelector('.added-cards');
let instructionsHeader = document.querySelector('.recipe-instructions-header')
let instructionsContainer = document.querySelector('.recipe-instructions')

let recipes = recipeData.map(recipe => new Recipe(recipe));

window.onload = loadPage();

body.addEventListener('click', clickHandler) 

function clickHandler() {
  var classList = event.target.classList
  if (classList.contains('favorite-img')) {
    displayIconChange(iconSources.red, iconSources.white)
    User.updateFavorites(addToUser());
  }
  if (classList.contains('add-recipe-img')) {
    displayIconChange(iconSources.trash, iconSources.add)
    User.updateRecipesToCook(addToUser());
  }
  if (classList.contains('add-recipe-button')) {
    displayPage(addedPage, favoritesPage, homePage, instructionsPage);
    displayUserRecipes(User.recipesToCook);
  }
  if (classList.contains('favorites-button')) {
    displayPage(favoritesPage, addedPage, homePage, instructionsPage);
    displayUserRecipes(User.favoriteRecipes);
  }
  if (classList.contains('home-button')) {
    displayPage(homePage, addedPage, favoritesPage, instructionsPage);
  }
  if (classList.contains('fav')) {
    displayPage(instructionsPage, addedPage, homePage, favoritesPage)
    displayInstructions(User.favoriteRecipes);
  }
  if (classList.contains('saved')) {
    displayPage(instructionsPage, addedPage, homePage, favoritesPage)
    displayInstructions(User.recipesToCook);
  }
}

function displayInstructions(arr) {
  let clickedRecipe = arr.filter(recipe => recipe.id == event.target.id)
  let index = arr.indexOf(clickedRecipe[0])
  let instructions = arr[index].getInstructions()
  instructionsHeader.innerText = `${clickedRecipe[0].name}`
  instructionsContainer.innerHTML = `<button class="cook-btn">Cook This Recipe!</button>`;
  instructions.forEach((inst, i) => instructionsContainer.insertAdjacentHTML('beforeend', 
  `<p class="instruction-step">Step ${i + 1}: ${inst.instruction}</p>`))
}

function displayUserRecipes(arr) {
  let currentPage = document.getElementsByClassName('current')
  currentPage[0].innerHTML = ''
  arr.forEach(recipe => {    
    currentPage[0].insertAdjacentHTML('beforeend', domInsertions.insertRecipeCard(recipe))
  });
  event.target.classList.contains('favorites-button') ? changeFavCards() : changeSavedCards();
}

function changeFavCards() {
  let elements = favRecipes.getElementsByClassName('card-button-container')
  var buttons = Array.from(elements);
  buttons.forEach(button => button.innerHTML = `<p id="${button.id}" class="fav instructions-btn">Get Instructions</p>`)
}

function changeSavedCards() {
  let elements = addedRecipes.getElementsByClassName('card-button-container')
  var buttons = Array.from(elements);
  buttons.forEach(button => button.innerHTML = `<p id="${button.id}" class="saved instructions-btn">Get Instructions</p>`)
}

function loadPage() {
  showRecipes(recipes);
  generateUser();
}

function showRecipes() {
  recipeData.forEach(recipe => {    
    allCardsContainer.insertAdjacentHTML('beforeend', domInsertions.insertRecipeCard(recipe))
  });
}

function generateUser() {
   let user = usersData[Math.floor(Math.random() * usersData.length)]
   User = new User(user.id, user.name, user.pantry)
}

function displayIconChange(active, inactive) {
  event.target.src === active ? event.target.src = inactive : event.target.src = active;
}

function displayPage(currentPage, page1, page2, page3) {
  currentPage.removeAttribute('hidden');
  page1.setAttribute('hidden', '')
  page2.setAttribute('hidden', '');
  page3.setAttribute('hidden', '');
  page1.childNodes[3].classList.remove('current')
  page2.childNodes[3].classList.remove('current')
  page3.childNodes[3].classList.remove('current')
  currentPage.childNodes[3].classList.add('current')
}

function addToUser() {
  let clickedRecipe = recipes.filter(recipe => {
    return event.target.id === recipe.name
  });
  return clickedRecipe[0]
}