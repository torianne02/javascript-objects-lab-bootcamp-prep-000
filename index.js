var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object);
  newRecipes[key] = value;
  return newRecipes;
}

