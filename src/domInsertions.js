let domInsertions = {
  insertRecipeCard(recipe) {
    return `
    <div id="${recipe.id}" class="recipe-card">
      <section id="${recipe.id}" class="name-container">
        <p class="recipe-name">${recipe.name}</p>
      </section>
      <img id="${recipe.id}"src=${recipe.image} class="recipe-img">
      <section id="${recipe.id}" class="card-button-container">
        <button class="recipe-button">
          <img id="${recipe.name}" src="https://i.ya-webdesign.com/images/heart-icon-png-7.png" class="favorite-img">
        </button>
        <section class="cost-container">
          <p class="cost">$${recipe.cost}</p>
         </section>
        <button class="recipe-button">
          <img id="${recipe.name}" src="https://image.flaticon.com/icons/svg/32/32339.svg" class="add-recipe-img">
        </button>
      </section>
    </div>`;
  }
};