//Подключам модули
const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//Настраиваем почту
var api_key = 'key-9487f1cde333c8a287bc63916d05d7bd';
var domain = 'barhan-cafe.ru';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//Пишем роутинги

//Главная
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/home', function(req, res) {
  res.render('home');
});

//О нас
router.get('/about_us', function(req, res) {
  res.render('about_us');
});

//Корзина

router.get('/basket', function(req, res) {
  res.render('basket');
});

//Контакты
router.get('/contacts', function(req, res) {
  res.render('contacts');
});

//Новости

router.get('/news', function(req, res) {
  res.render('news');
});

//Подновости
router.get('/news/news', function(req, res) {
  res.render('news_article');
});

router.get('/news/news1', function(req, res) {
  res.render('news_article1');
});

router.get('/news/news2', function(req, res) {
  res.render('news_article2');
});

//Меню

router.get('/menu', function(req, res) {
  res.render('menu');
});

//Различные варианты меню:

//Выпечка

router.get('/menu/bakery', function(req, res) {
  Food.Bakery.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Гарниры 

router.get('/menu/garnish', function(req, res) {
  Food.Garnish.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Напитки

router.get('/menu/drinks', function(req, res) {
  Food.Drink.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Салаты

router.get('/menu/salads', function(req, res) {
  Food.Salad.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Горячее

router.get('/menu/hot', function(req, res) {
  Food.Hot.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Супы

router.get('/menu/soups', function(req, res) {
  Food.Soup.find(function(err, docs) {
    res.render('menu_type', { food: docs });
  });
});

//Информация о выбранном блюде

//Супы

router.get('/soups/:number', function(req, res) {
  Food.Soup.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Салаты

router.get('/salads/:number', function(req, res) {
  Food.Salad.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Выпечка

router.get('/bakery/:number', function(req, res) {
  Food.Bakery.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Гарниры

router.get('/garnish/:number', function(req, res) {
  Food.Garnish.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Горячее

router.get('/hot/:number', function(req, res) {
  Food.Hot.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Напитки

router.get('/drinks/:number', function(req, res) {
  Food.Drink.find(function(err, docs) {
    res.render('item', { food: docs, number: req.params.number });
  });
});

//Обрабатываем формы

//Форма subscribe

router.post('/footer', urlencodedParser, function(req, res) {
  var data = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: 'barhan.cafe@gmail.com',
    subject: 'Подписка',
    html: "<p style='font-family: FiraSans-Regular, sans-serif;font-size: 18px; color: #1a1a1a'>Почтовый адрес "
    + req.body.email + " был подписан.</p>"
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });

  var data1 = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: req.body.email,
    subject: 'Спасибо что подписались!',
    html: "<p style='font-family: FiraSans-Regular, sans-serif;font-size: 18px; color: #1a1a1a'> Благодарим Вас за подписку.</p>"
  };
  
  mailgun.messages().send(data1, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });
  res.render('home');
});

//Форма заказа еды

router.post('/product-send', urlencodedParser, function(req, res) {
  let products = JSON.parse(req.body.shoppingCart);
  let result = '';
  for (let i = 0; i < products.length; i++) {
    result += products[i].name + ' ----- ' 
    + products[i].price + ' Р x' + products[i].count + ' = ' 
    + products[i].count * products[i].price + ' Р<br>';
  }
  
  let totalPrice = Number(req.body.totalPrice);
  
  var data = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: req.body.email,
    subject: 'Вы сделали заказ на Barhan',
    html: "<p style='font-family: FiraSans-Regular, sans-serif;font-size: 14px; color: #1a1a1a'><span style='color: #b11116; font-size: 18px'>Ваш заказ:</span><br><br>" + result + "<span style='color: #b11116; font-size: 16px'>Суммарная стоимость:</span> " + totalPrice + " P<br><br><span style='color: #b11116; font-size: 18px'>Приятного аппетита!</span></p>"
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });

    var data1 = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: 'barhan.cafe@gmail.com',
    subject: 'Заказ',
    html: "<span style='font-family: FiraSans-Regular, sans-serif;font-size: 14px; color: #1a1a1a'><span style='color: #b11116; font-size: 14px'>Заказчик:</span> " + req.body.name + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Номер телефона:</span> " + req.body.telephone + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Дата доставки:</span> " + req.body.dataNumber + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Время доставки:</span> " + req.body.timeNumber + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Способ расчета:</span> " + req.body.money + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Кол-во персон:</span> " + req.body.number + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Комментарии к заказу:</span> " + req.body.comments + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Заказ:</span><br> " + result + "<br>"
    + "<span style='color: #b11116; font-size: 14px'>Сумма:</span> " + totalPrice + "</span>"
  };
  
  mailgun.messages().send(data1, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });

res.render('home');
});

//Форма контактов

router.post('/contact', urlencodedParser, function(req, res) {
  var data = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: req.body.email,
    subject: 'Вопрос',
    html: "<p style='font-family: FiraSans-Regular, sans-serif;font-size: 18px; color: #1a1a1a'> Благодарим Вас за вопрос. Мы свяжемся с Вами в ближайшее время</p>"
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });

  var data1 = {
    from: 'Barhan <postmaster@barhan-cafe.ru>',
    to: 'barhan.cafe@gmail.com',
    subject: 'Вопрос',
    html: "<p style='font-family: FiraSans-Regular, sans-serif;font-size: 15px; color: #1a1a1a'>"
    + "Пользователь: " + req.body.name + "<br>"
    + "Веб-страница пользователя: " + req.body.webPage + "<br>"
    + "Электронная почта: " + req.body.email + "<br>"
    + "Телефон: " + req.body.telephone + "<br>"
    + "Cooбщение: " + req.body.message + "</p>"
  };
  
  mailgun.messages().send(data1, function (error, body) {
    console.log(body);
    if(!error) {
      console.log('Mail Sent');
    } else {
      console.log('Mail not sent');
    }
  });
  res.render('home');
});

//Экспортируем в модуль index
module.exports = router;
