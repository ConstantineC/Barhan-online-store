const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create food Schema & model
const FoodSchema = new Schema({
  title: String,
  composition: String, 
  proteins: String,
  fats: String,
  сarbohydrates: String,
  calories: String,
  weight: String,
  price: Number,
  category: String,
  image: String,
  type: String,
  href: String
});

const Soup = mongoose.model('soups', FoodSchema);
const Salad = mongoose.model('salads', FoodSchema);
const Hot = mongoose.model('hots', FoodSchema);
const Garnish = mongoose.model('garnishes', FoodSchema);
const Bakery = mongoose.model('bakeries', FoodSchema);
const Drink = mongoose.model('drinks', FoodSchema);

module.exports.Soup = Soup;
module.exports.Salad = Salad;
module.exports.Hot = Hot;
module.exports.Garnish = Garnish;
module.exports.Bakery = Bakery;
module.exports.Drink = Drink;
  