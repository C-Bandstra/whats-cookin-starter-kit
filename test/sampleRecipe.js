const sampleRecipe = [
  {
      "id": 1,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
          {
              "id": 100,
              "quantity": {
                  "amount": 1.5,
                  "unit": "c"
              }
          },
          {
              "id": 200,
              "quantity": {
                  "amount": 0.5,
                  "unit": "tsp"
              }
          },
      ],
      "instructions": [
          {
              "instruction": "Open Can",
              "number": 1
          },
          {
              "instruction": "Drink responsibly",
              "number": 2
          },
      ],
      "name": "Beer",
      "tags": [
          "drink",
          "beverage",
      ]
  },
  {
      "id": 2,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
          {
              "id": 100,
              "quantity": {
                  "amount": 1.5,
                  "unit": "c"
              }
          },
          {
              "id": 200,
              "quantity": {
                  "amount": 0.5,
                  "unit": "tsp"
              }
          },
      ],
      "instructions": [
          {
              "instruction": "Peel",
              "number": 1
          },
          {
              "instruction": "Eat",
              "number": 2
          },
      ],
      "name": "Banana",
      "tags": [
          "fruit",
          "vegan",
      ]
  }
]
module.exports = sampleRecipe;
