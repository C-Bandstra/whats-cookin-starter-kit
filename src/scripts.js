let allCardsContainer = document.querySelector('.all-cards');
let body = document.querySelector('body');
let homePage = document.querySelector('.home-page')
let addedPage = document.querySelector('.added-page')
let favoritesPage = document.querySelector('.favorites-page')

window.onload = loadPage();

body.addEventListener('click', clickHandler) 

function clickHandler() {
  var classList = event.target.classList
  if (classList.contains('favorite-img')) {
    displayFavorite()
  }
  if (classList.contains('add-recipe-img')) {
    displayAdded();
    addToSaved();
  }
  if (classList.contains('add-recipe-button')) {
    displayAddedPage();
  }
  if (classList.contains('favorites-button')) {
    displayFavoritesPage();
  }
  if (classList.contains('home-button')) {
    displayHomePage();
  }
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
   return User
}

function displayFavorite() {
  console.log(event.target.id)
  let red = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'
  let white = 'https://i.ya-webdesign.com/images/heart-icon-png-7.png'
  event.target.src === white ? event.target.src = red : event.target.src = white
  addToFavorites();
}

function displayAdded() {
  console.log(event.target.id)
  let trash = 'https://cdn3.iconfinder.com/data/icons/action-3/24/71_-_Action_bin_delete_all_garbage_recycle_remove_trash_icon-512.png'
  let add = 'https://image.flaticon.com/icons/svg/32/32339.svg'
  event.target.src === add ? event.target.src = trash : event.target.src = add;
}

function displayAddedPage() {
  homePage.setAttribute('hidden', '');
  favoritesPage.setAttribute('hidden', '');
  addedPage.removeAttribute('hidden')
}

function displayFavoritesPage() {
  homePage.setAttribute('hidden', '');
  addedPage.setAttribute('hidden', '')
  favoritesPage.removeAttribute('hidden');
}

function displayHomePage() {
  addedPage.setAttribute('hidden', '')
  favoritesPage.setAttribute('hidden', '');
  homePage.removeAttribute('hidden');
}

function addToFavorites() {
  let clickedRecipe = recipeData.filter(recipe => {
    return event.target.id === recipe.name
  });
  User.favoriteRecipes.push(clickedRecipe[0])
}

function addToSaved() {
  let clickedRecipe = recipeData.filter(recipe => {
    return event.target.id === recipe.name
  });
  User.recipesToCook.push(clickedRecipe[0])
}