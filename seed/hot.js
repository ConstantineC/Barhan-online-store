const mongoose = require('mongoose');
const Food = require('../models/food');

mongoose.connect('mongodb://localhost/food');

//Шашлычок из горбуши
var hot = [
  new Food.Hot({
    title: 'Шашлычок из горбуши',
    composition: 'Филе горбуши, перец болгарский, майонез, масло растительное, соль повареная пищевая, зелень свежая',
    proteins: '20,2 гр',
    fats: '31 гр',
    сarbohydrates: '2,7 гр',
    calories: '370 ккал',
    weight: '120 гр',
    price: 145,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Shaslik-gorb.jpg',
    type: 'hot',
    href: '/add-hot/'
  }),

//Шашлык куриный

  new Food.Hot({
    title: 'Шашлык куриный',
    composition: 'Тушка ЦБ, соль повареная пищевая, перец черный, молотый, специи, лук маринованный, соус томатный острый',
    proteins: '25,3 гр',
    fats: '22 гр',
    сarbohydrates: '2,9 гр',
    calories: '310 ккал',
    weight: '300 гр',
    price: 135,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Shashlik-kur.jpg',
    type: 'hot',
    href: '/add-hot/'
  }),

//Казан кебаб

  new Food.Hot({
    title: 'Казан кебаб',
    composition: 'Мясо птицы, специи, картофель свежий, морковь свежая, лук репчатый, масло растительное, соль повареная пищевая, вода питьевая, зелень свежая',
    proteins: '10,2 гр',
    fats: '18,7 гр',
    сarbohydrates: '8,8 гр',
    calories: '112 ккал',
    weight: '100 гр',
    price: 95,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Kazan-Kebab.jpg',
    type: 'hot',
    href: '/add-hot/'
  }),

//Шашлык свиной

  new Food.Hot({
    title: 'Шашлык свиной',
    composition: 'Свинина карбонат, соль повареная пищевая, перец черный молотый, специи, чеснок свежий, соус томатный острый, лук маринованный',
    proteins: '39,2 гр',
    fats: '42 гр',
    сarbohydrates: '2,8 гр',
    calories: '312 ккал',
    weight: '160 гр',
    price: 145,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Shashlik-svin.jpg',
    type: 'hot',
    href: '/add-hot/'
  }),

//Плов с говядиной

  new Food.Hot({
    title: 'Плов с говядиной',
    composition: 'Говядина, крупа рисовая, морковь свежая, лук репчатый, масло растительное, чеснок свежий, соль повареная пищевая, специи',
    proteins: '18,7 гр',
    fats: '13,2 гр',
    сarbohydrates: '38,4 гр',
    calories: '270 ккал',
    weight: '250 гр',
    price: 120,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Plov.jpg',
    type: 'hot',
    href: '/add-hot/'
  }),

//Лагман жареный

  new Food.Hot({
    title: 'Лагман жареный',
    composition: 'Говядина, лук репчатый, морковь свежая, перец болгарский, паста томатная, масло растительное, чеснок свежий, лапша домашняя отварная на лагман (мука пшеничная в/с, вода питьевая, яйца куриные пищевые, масло растительное, соль',
    proteins: '12,2 гр',
    fats: '14,9 гр',
    сarbohydrates: '21,6 гр',
    calories: '146 ккал',
    weight: '100 гр',
    price: 145,
    category: 'Горячее',
    image: '../assets/img/Menu/Hot/Lagman.jpg',
    type: 'hot',
    href: '/add-hot/'
  })
];

var done = 0;
for (let i = 0; i < hot.length; i++) {
  hot[i].save(function(err, result) {
    done++;
    if (done === hot.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
