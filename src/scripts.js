let allCardsContainer = document.querySelector('.all-cards');
let body = document.querySelector('body');
let homePage = document.querySelector('.home-page');
let addedPage = document.querySelector('.added-page');
let favoritesPage = document.querySelector('.favorites-page');
let instructionsPage = document.querySelector('.instructions-page')
let searchPage = document.querySelector('.search-page')
let favRecipes = document.querySelector('.favs-cards');
let addedRecipes = document.querySelector('.added-cards');
let instructionsHeader = document.querySelector('.recipe-instructions-header')
let instructionsContainer = document.querySelector('.recipe-instructions')
let selectBox = document.querySelector('.categories')
let searchInput = document.querySelector('.search-input')
let searchBtn = document.querySelector('.search-btn')

let recipes = recipeData.map(recipe => new Recipe(recipe));

window.onload = loadPage();

body.addEventListener('click', clickHandler) 

function clickHandler() {
  console.log(event)
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
    displayPage(favoritesPage, addedPage, homePage, instructionsPage, searchPage);
    displayUserRecipes(User.favoriteRecipes);
  }
  if (classList.contains('home-button')) {
    displayPage(homePage, addedPage, favoritesPage, instructionsPage, searchPage);
  }
  if (classList.contains('fav')) {
    displayPage(instructionsPage, addedPage, homePage, favoritesPage, searchPage)
    displayInstructions(User.favoriteRecipes);
  }
  if (classList.contains('saved')) {
    displayPage(instructionsPage, addedPage, homePage, favoritesPage, searchPage)
    displayInstructions(User.recipesToCook);
  }
  if (classList.contains('cook-btn')) {
    displayCookMessage();
  }
  if (classList.contains('search-icon')) {
    displayPage(searchPage, instructionsPage, addedPage, homePage, favoritesPage)
    displayUserRecipes(search());
    resetInputs();
  }
  if (classList.contains('categories')) {
    searchInput.removeAttribute('disabled')
  }
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
  let pantry = new Pantry(user.pantry)
  User = new User(user.id, user.name, pantry)
}

function displayUserRecipes(arr) {
  let currentPage = document.getElementsByClassName('current')
  currentPage[0].innerHTML = ''
  arr.forEach(recipe => {    
    currentPage[0].insertAdjacentHTML('beforeend', domInsertions.insertRecipeCard(recipe))
  });
  event.target.classList.contains('favorites-button') ? changeFavCards() : changeSavedCards();
}

function displayIconChange(active, inactive) {
  event.target.src === active ? event.target.src = inactive : event.target.src = active;
}

function addToUser() {
  let clickedRecipe = recipes.filter(recipe => {
    return event.target.id === recipe.name
  });
  return clickedRecipe[0]
}

function displayPage(currentPage, page1, page2, page3, page4) {
  currentPage.removeAttribute('hidden');
  page1.setAttribute('hidden', '')
  page2.setAttribute('hidden', '');
  page3.setAttribute('hidden', '');
  page4.setAttribute('hidden', '');
  page1.childNodes[3].classList.remove('current')
  page2.childNodes[3].classList.remove('current')
  page3.childNodes[3].classList.remove('current')
  page3.childNodes[3].classList.remove('current')
  currentPage.childNodes[3].classList.add('current')
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

function displayInstructions(arr) {
  let clickedRecipe = arr.filter(recipe => recipe.id == event.target.id)
  let index = arr.indexOf(clickedRecipe[0])
  let instructions = arr[index].getInstructions()
  instructionsHeader.innerText = `${clickedRecipe[0].name}`
  instructionsContainer.innerHTML = `<button id="${event.target.id}" class="cook-btn">Cook This     Recipe!</button>`;
  instructions.forEach((inst, i) => instructionsContainer.insertAdjacentHTML('beforeend', 
    `<p class="instruction-step">Step ${i + 1}: ${inst.instruction}</p>`))
}

function displayCookMessage() {
  let recipe = recipeData.filter(recipe => recipe.id == event.target.id);
  let needed = User.pantry.findNeededIngredients(recipe[0]);
  let cookBtn = instructionsContainer.getElementsByClassName('cook-btn')
  cookBtn[0].insertAdjacentHTML('afterend', `<div class="needed-list"></div>`)
  let list = instructionsContainer.getElementsByClassName('needed-list')
  needed.forEach(item => {
    list[0].insertAdjacentHTML('afterbegin', 
      `<li>You need ${item.amountNeeded} ${item.quantity.unit} of ${item.name}</li>`)
  })
}

function search() {
  let type = selectBox.options[selectBox.selectedIndex].value
  let input = searchInput.value
  return User.determineFilterType(recipes, input, type)
}

function resetInputs() {
  searchInput.value = ''
  searchInput.setAttribute('disabled', '');
  selectBox.value = 'category'
}
