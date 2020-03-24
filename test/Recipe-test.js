const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');


describe('Recipe', function() {
  it('should be a function', function() {
    var recipe = new Recipe({ id: 1, type: {
        "id": 20081,
        "quantity": {
            "amount": 1.5,
            "unit": "c"
        }
      },
      instructions: [
          {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
          }]
    });

    expect(Recipe).to.be.a('function');
  })
})
