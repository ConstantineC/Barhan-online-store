const mongoose = require('mongoose');
const Food = require('../models/food');

mongoose.connect('mongodb://localhost/food');

//Картофель ароматный
var garnish = [
  new Food.Garnish({
    title: 'Картофель ароматный',
    composition: 'Картофель свежий, майонез Провансаль, соль повереная пищевая, перец черный молотый, масло растительное',
    proteins: '2,7 гр',
    fats: '15,1 гр',
    сarbohydrates: '17,4 гр',
    calories: '218 ккал',
    weight: '100 гр',
    price: 65,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Kartofel.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  }),

//Лук маринованный

  new Food.Garnish({
    title: 'Лук маринованный',
    composition: 'Лук репчатый, уксус столовый 3%, сахар-песок, петрушка свежая, укроп свежий, соль повареная пищевая, перец черный молотый',
    proteins: '1,4 гр',
    fats: '0,2 гр',
    сarbohydrates: '9,2 гр',
    calories: '43 ккал',
    weight: '30 гр',
    price: 30,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Luk.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  }),

//Соус чесночный

  new Food.Garnish({
    title: 'Соус чесночный',
    composition: 'Майонез Провансаль, зелень свежая, чеснок свежий',
    proteins: '2,8 гр',
    fats: '59 гр',
    сarbohydrates: '4,1 гр',
    calories: '558 ккал',
    weight: '30 гр',
    price: 30,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Sous-garlik.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  }),

//Соус томатный

  new Food.Garnish({
    title: 'Соус томатный',
    composition: 'Томатная паста, лук репчатый, чеснок свежий, вода фильтрованная, сахар, соль повареная пищевая, перец черный молотый, перец красный молотый, кориандр молотый',
    proteins: '2,5 гр',
    fats: '0,0 гр',
    сarbohydrates: '12,8 гр',
    calories: '60 ккал',
    weight: '30 гр',
    price: 30,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Sous-tomat.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  }),

//Картофельное пюре

  new Food.Garnish({
    title: 'Картофельное пюре',
    composition: 'Картофель, молоко, масло сливочное, соль повареная пищевая',
    proteins: '1,7 гр',
    fats: '2,8 гр',
    сarbohydrates: '15 гр',
    calories: '88 ккал',
    weight: '100 гр',
    price: 60,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Pure.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  }),

//Рис

  new Food.Garnish({
    title: 'Рис',
    composition: '',
    proteins: '2,7 гр',
    fats: '0,3 гр',
    сarbohydrates: '28 гр',
    calories: '130 ккал',
    weight: '100 гр',
    price: 40,
    category: 'Гарниры',
    image: '../assets/img/Menu/Garnish/Rice.jpg',
    type: 'garnish',
    href: '/add-garnish/'
  })
];

var done = 0;
for (let i = 0; i < garnish.length; i++) {
  garnish[i].save(function(err, result) {
    done++;
    if (done === garnish.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
