const mongoose = require('mongoose');
const Food = require('../models/food');

mongoose.connect('mongodb://localhost/food');

//Салат с крабовыми палочками

var salad = [
  new Food.Salad({
    title: 'Салат с крабовыми палочками',
    composition: 'Рис отварной, крабовые палочки, майонез, кукуруза консервированная, огурцы свежие, яйца куриные пищевые, зелень свежая, соль повареная пищевая',
    proteins: '3,2 гр',
    fats: '14,8 гр',
    сarbohydrates: '11,4 гр',
    calories: '192 ккал',
    weight: '100 гр',
    price: 45,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salat-neoch.jpg',
    type: 'salads',
    href: '/add-salad/'
  }),

//Салат "Оливье"

  new Food.Salad({
    title: 'Салат "Оливье"',
    composition: 'Картофель отварной, ветчина в форме свиная, майонез, огурцы консервированные, горошек зеленый консервированный, яйца куриные пищевые отварные, сметана 20% жирности, соль повареная',
    proteins: '4,7 гр',
    fats: '10,2 гр',
    сarbohydrates: '5,3 гр',
    calories: '132 ккал',
    weight: '100 гр',
    price: 45,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salad-Olivue.jpg',
    type: 'salads',
    href: '/add-salad/'
  }),

//Салат "Европейский"

  new Food.Salad({
    title: 'Салат "Европейский"',
    composition: 'Грудка куриная в/н, ветчина в форме свиная, лук репчатый, масло растительное, майонез, яйца куриные пищевые, соль повареная пищевая, перец черный молотый',
    proteins: '14,5 гр',
    fats: '24,4 гр',
    сarbohydrates: '2,9 гр',
    calories: '289 ккал',
    weight: '100 гр',
    price: 55,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salat-Ukr.jpg',
    type: 'salads',
    href: '/add-salad/'
  }),

//Салат "Пай"
 
  new Food.Salad({
    title: 'Салат "Пай"',
    composition: 'Картофель свежий, грудка куриная в/к, капуста белокачанная свежая, майонез, перец болгарский, зелень свежая, соль повареная пищевая, перец черный молотый',
    proteins: '9,7 гр',
    fats: '16,8 гр',
    сarbohydrates: '6,2 гр',
    calories: '215 ккал',
    weight: '100 гр',
    price: 45,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salad-Pai.jpg',
    type: 'salads',
    href: '/add-salad/'
  }),

//Салат "Здоровье"

  new Food.Salad({
    title: 'Салат "Здоровье"',
    composition: 'Капуста белокачанная свежая, огурца свежие, масло растительное, морковь свежая, сахар-песок, соль повареная пищевая, зелень свежая, перец черный молотый',
    proteins: '1,3 гр',
    fats: '8,9 гр',
    сarbohydrates: '5,5 гр',
    calories: '106 ккал',
    weight: '100 гр',
    price: 45,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salad-Zdorov.jpg',
    type: 'salads',
    href: '/add-salad/'
  }),

  //Салат "Греческий"

  new Food.Salad({
    title: 'Салат "Греческий"',
    composition: 'Огурцы, помидоры, перец болгарский, салат Пекинский, маслины конс., сыр брынза, п/ф соус Греческий (масло растительное, соевый соус',
    proteins: '2,5 гр',
    fats: '23,3 гр',
    сarbohydrates: '4,9 гр',
    calories: '239 ккал',
    weight: '100 гр',
    price: 45,
    category: 'Салаты',
    image: '../assets/img/Menu/Salads/Salad-Greek.jpg',
    type: 'salads',
    href: '/add-salad/'
  })
];

var done = 0;
for (let i = 0; i < salad.length; i++) {
  salad[i].save(function(err, result) {
    done++;
    if (done === salad.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
