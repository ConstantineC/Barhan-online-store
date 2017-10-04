const Food = require('../models/food');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/food');

//Хачапури

var bakery = [
  new Food.Bakery({
    title: 'Хачапури',
    composition: 'Тесто слоеное (мука пшеничная хлебопекарная в/с, вода питьевая, маргарин, соль повареная пищевая), начинка (сыр голландски, яйца куриные пищевые',
    proteins: '12,9 гр',
    fats: '27,6 гр',
    сarbohydrates: '31 гр',
    calories: '427 ккал',
    weight: '150 гр',
    price: 50,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Hachapuri.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  }),

//Хворост

  new Food.Bakery({
    title: 'Хворост',
    composition: 'Мука пшеничная хлебопекарная в/с, масло растительное рафинированное, соль повареная пищевая, яйца куриные пищевые, вода питьевая, сахар-песок, пудра сахарная',
    proteins: '9,1 гр',
    fats: '77,9 гр',
    сarbohydrates: '42 гр',
    calories: '908 ккал',
    weight: '100 гр',
    price: 80,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Hvorost.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  }),

//Самса с курицей

  new Food.Bakery({
    title: 'Самса с курицей',
    composition: 'Тесто слоеное (мука пшеничная хлебопекарная в/с, вода питьевая, маргарин, соль повареная пищевая), начинка (окорочок куриный охл, жир говяжий, лук репчатый, соль повареная пищевая, масло растительное, перец черный молотый), кунжутное семя',
    proteins: '7,4 гр',
    fats: '23,1 гр',
    сarbohydrates: '28 гр',
    calories: '352 ккал',
    weight: '150 гр',
    price: 50,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Samsa-s-kuricei.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  }),

//Самса с говядиной

  new Food.Bakery({
    title: 'Самса с говядиной',
    composition: 'Тесто слоеное (мука пшеничная хлебопекарная в/с, вода питьевая, маргарин, соль повареная пищевая), начинка (говядина с/м, жир говяжий, лук репчатый, соль повареная пищевая, масло растительное, перец черный молотый), кунжутное семя',
    proteins: '7,5 гр',
    fats: '22,7 гр',
    сarbohydrates: '28 гр',
    calories: '349 ккал',
    weight: '150 гр',
    price: 50,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Samsa-s-govyadinoi.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  }),

//Лепешка с луком

  new Food.Bakery({
    title: 'Лепешка с луком',
    composition: 'Тесто на самсу (мука пшеничная хлебопекарная в/с, вода питьевая, маргарин, соль повареная пищевая), лук репчатый, соль повареная пищевая, масло растительное',
    proteins: '6,4 гр',
    fats: '15,8 гр',
    сarbohydrates: '34,3 гр',
    calories: '223 ккал',
    weight: '100 гр',
    price: 55,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Lepeshka-s-lukom.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  }),

//Пирожок Турецкий


  new Food.Bakery({
    title: 'Пирожок Турецкий',
    composition: 'Лаваш овальный бездрожжевой, начинка (сыр адыгейский, помидоры свежие, зелень свежая, соль повареная пищевая)',
    proteins: '12,2 гр',
    fats: '13,3 гр',
    сarbohydrates: '16,7 гр',
    calories: '188 ккал',
    weight: '75 гр',
    price: 45,
    category: 'Выпечка',
    image: '../assets/img/Menu/Bakery/Pirozhok-tur.jpg',
    type: 'bakery',
    href: '/add-bakery/'
  })
];

var done = 0;
for (let i = 0; i < bakery.length; i++) {
  bakery[i].save(function(err, result) {
    done++;
    if (done === bakery.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
  