const mongoose = require('mongoose');
const Food = require('../models/food');

mongoose.connect('mongodb://localhost/food');

//Лагман с домашней лапшой

var soup = [
  new Food.Soup({
    title: 'Лагман с домашней лапшой',
    composition: 'Говядина, вода питьевая, картофель свежий, морковь свежая, лук репчатый, перец болгарский, масло растительное, чеснок свежий, соль поваренная пищевая, специи, лапша собств. изготовления (мука пшеничная в/с, вода питьевая, яйца куриные пищевые, масло растительное, соль',
    proteins: '3,7 гр',
    fats: '4,8 гр',
    сarbohydrates: '11,8 гр',
    calories: '106 ккал',
    weight: '350 гр',
    price: 90,
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Lagman.jpg',
    type: 'soups',
    href: '/add-soup/'
}),

//Харчо

  new Food.Soup({
    title: 'Харчо',
    composition: 'Говядина, крупа рисовая, паста томатная, масло растительное, аджика, вода питьевая, соль поваренная пищевая, специи, чеснок, сметана 20% жирности, зелень',
    proteins: '1,4 гр',
    fats: '4,3 гр',
    сarbohydrates: '6,9 гр',
    calories: '72 ккал',
    weight: '250 гр',
    price: 60, 
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Charcho.jpg',
    type: 'soups',
    href: '/add-soup/'
  }),

//Окрошка

  new Food.Soup({
    title: 'Окрошка',
    composition: 'Квас хлебный, ветчина свиная, картофель отварной, огурцы свежие, горчица столовая, яйца куриные пищевые отварные, соль повареная пищевая, специи, сметана 20% жирности',
    proteins: '3,3 гр',
    fats: '2,2 гр',
    сarbohydrates: '7,8 гр',
    calories: '63 ккал',
    weight: '250 гр',
    price: 65,
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Kroshka.jpg',
    type: 'soups',
    href: '/add-soup/'
  }),

//Шурпа

  new Food.Soup({
    title: 'Шурпа',
    composition: 'Филе говяжее, картофель отварной, жир курдючный, луковицы, пшеничная мука, зелень кинзы, зелень петрушки, перец, соль повареная пищевая',
    proteins: '5 гр',
    fats: '7,2 гр',
    сarbohydrates: '8,6 гр',
    calories: '118,9 ккал',
    weight: '250 гр',
    price: 70,
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Shurpa.jpg',
    type: 'soups',
    href: '/add-soup/'
  }),

//Солянка

  new Food.Soup({
    title: 'Солянка',
    composition: 'Колбаса копченая, сосиски, говядина вареная, бульонные кубики, вода, лук репчатый, масло растительное, томат-пюре, огурцы маринованные, оливки без косточек, лимон, соль повареная пищевая',
    proteins: '5,2 гр',
    fats: '4,6 гр',
    сarbohydrates: '1,7 гр',
    calories: '69 ккал',
    weight: '250 гр',
    price: 85,
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Solyana.jpg',
    type: 'soups',
    href: '/add-soup/'
  }),

//Борщ

  new Food.Soup({
    title: 'Борщ',
    composition: 'Мясо говядины, картофель, капуста свежая, свекла, морковь, лук репчатый, вода, паста томатная, уксус, чеснок, лист лавровый, растительное масло',
    proteins: '2,9 гр',
    fats: '2,4 гр',
    сarbohydrates: '2,4 гр',
    calories: '42,6 ккал',
    weight: '250 гр',
    price: 75,
    category: 'Супы',
    image: '../assets/img/Menu/Soup/Borch.jpg',
    type: 'soups',
    href: '/add-soup/'
  })
];

var done = 0;
for (let i = 0; i < soup.length; i++) {
  soup[i].save(function(err, result) {
    done++;
    if (done === soup.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
