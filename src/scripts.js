let allCardsContainer = document.querySelector('.all-cards');
let body = document.querySelector('body');
let homePage = document.querySelector('.home-page');
let addedPage = document.querySelector('.added-page');
let favoritesPage = document.querySelector('.favorites-page');
let favRecipes = document.querySelector('.favs-cards');
let addedRecipes = document.querySelector('.added-cards');

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
    displayPage(addedPage, favoritesPage, homePage);
    displayUserRecipes(User.recipesToCook);
  }
  if (classList.contains('favorites-button')) {
    displayPage(favoritesPage, addedPage, homePage);
    displayUserRecipes(User.favoriteRecipes);
  }
  if (classList.contains('home-button')) {
    displayPage(homePage, addedPage, favoritesPage);
  }
}

function displayUserRecipes(arr) {
  console.log(event.target.classList)
  let currentPage = document.getElementsByClassName('current')
  currentPage[0].innerHTML = ''
  arr.forEach(recipe => {    
    currentPage[0].insertAdjacentHTML('beforeend', domInsertions.insertRecipeCard(recipe))
  });
  event.target.classList.contains('favorites-button') ? changeFavCards() : changeSavedCards();
}

function changeFavCards() {
  let cards = document.getElementsByClassName('favs-cards')
  let elements = cards[0].getElementsByClassName('card-button-container')
  var buttons = Array.from(elements);
  console.log(buttons)
  buttons.forEach(button => button.innerHTML = `<p class="instructions-btn">Get Instructions</p>`)
}

function changeSavedCards() {
  let cards = document.getElementsByClassName('added-cards')
  let elements = cards[0].getElementsByClassName('card-button-container')
  var buttons = Array.from(elements);
  console.log(buttons)
  buttons.forEach(button => button.innerHTML = `<p class="instructions-btn">Get Instructions</p>`)
}

function loadPage() {
  showRecipes();
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

function displayPage(currentPage, page1, page2) {
  currentPage.removeAttribute('hidden');
  page1.setAttribute('hidden', '')
  page2.setAttribute('hidden', '');
  page1.childNodes[3].classList.remove('current')
  page2.childNodes[3].classList.remove('current')
  currentPage.childNodes[3].classList.add('current')
}

function addToUser() {
  let clickedRecipe = recipeData.filter(recipe => {
    return event.target.id === recipe.name
  });
  return clickedRecipe[0]
}