//Подключаем модули
const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');

//Устанавливаем Экспресс
const app = express();

//Подключаемся к MongoDB
mongoose.connect('mongodb://localhost/food');
mongoose.Promise = global.Promise;


//Устанавливаем шаблонизатор EJS
app.set('view engine', 'ejs');

//Подключаем Роуты
app.use(routes);

app.use('/assets', express.static('assets'));

//Прослушиваем порт 3000
app.listen(process.env.port || 3000, function() {
  console.log('now listening for requests');
});