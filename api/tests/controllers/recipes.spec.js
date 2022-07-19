const expect = require("chai").expect;
const controller = require('../../src/controllers/Recipes.controllers');

describe('----- recipes -------', function () {
  beforeEach(function () {
    Recipe.reset()
  })

  it('Resolve as promise with an array of recipes in objects ', function () {
    expect(Model.listUsers()).to.eql([])
  })

})

