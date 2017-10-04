const mongoose = require('mongoose');
const Food = require('../models/food');

mongoose.connect('mongodb://localhost/food');

//Американо
var drink = [
  new Food.Drink({
    title: 'Американо',
    composition: 'Кофе натуральный, вода',
    proteins: '0,6 гр',
    fats: '0,6 гр',
    сarbohydrates: '0,7 гр',
    calories: '9,5 ккал',
    weight: '180 мл',
    price: 35,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Americano.png',
    type: 'drinks',
    href: '/add-drink/'
  }),

//Бонаква

  new Food.Drink({
    title: 'BonAuqa',
    composition: 'Вода, сахар, регуляторы кислотности (лимонная кислота, цитрат натрия, фосфат калия, фосфат кальция), натуральные ароматизаторы, консерванты (сорбат калия, бензоат натрия), хлорид натрия (калоризатор)',
    proteins: '0,0 гр',
    fats: '0,0 гр',
    сarbohydrates: '4,6 гр',
    calories: '88 ккал',
    weight: '500 мл',
    price: 30,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Bonaqua.png',
    type: 'drinks',
    href: '/add-drink/'
  }),

//Капучино

  new Food.Drink({
    title: 'Капучино',
    composition: 'Кофе натуральный, молоко, шоколад',
    proteins: '1,8 гр',
    fats: '2,6 гр',
    сarbohydrates: '3,9 гр',
    calories: '45,5 ккал',
    weight: '180 мл',
    price: 55,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Capucino.png',
    type: 'drinks',
    href: '/add-drink/'
  }),

//Кока-кола

  new Food.Drink({
    title: 'Coca-Cola',
    composition: 'Сахар, ванилин, цимтовое масло, масло гвоздики, лимон',
    proteins: '0,0 гр',
    fats: '0,0 гр',
    сarbohydrates: '10,4 гр',
    calories: '42 ккал',
    weight: '500 мл',
    price: 50,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Cola.png',
    type: 'drinks',
    href: '/add-drink/'
  }),

//Молочный шоколад

  new Food.Drink({
    title: 'Молочный шоколад',
    composition: 'Молоко, шоколад',
    proteins: '3,7 гр',
    fats: '16,8 гр',
    сarbohydrates: '30 гр',
    calories: '120 ккал',
    weight: '180 мл',
    price: 60,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Milk-choclate.png',
    type: 'drinks',
    href: '/add-drink/'
  }),

//Морс

  new Food.Drink({
    title: 'Морс',
    composition: 'Морс',
    proteins: '0,1 гр',
    fats: '0,0 гр',
    сarbohydrates: '10,7 гр',
    calories: '41 ккал',
    weight: '500 мл',
    price: 40,
    category: 'Напитки',
    image: '../assets/img/Menu/Drinks/Mors.jpg',
    type: 'drinks',
    href: '/add-drink/'
  })
];

var done = 0;
for (let i = 0; i < drink.length; i++) {
  drink[i].save(function(err, result) {
    done++;
    if (done === drink.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
