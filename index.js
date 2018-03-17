var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object);
  return newRecipes[key] = value;
}