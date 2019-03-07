const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');
const chat = require('./app/socket/chat.js');
const app = express();
const port = 8000;

// ES6 Promises
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true })); //нужно для обработки формы в URL-кодировке(чтение body)

mongoose.connect(db.url, { useMongoClient: true }, (err, client) => {
  if (err) return console.log(err);
  //let database = client.db('notes');
  require('./app/routes')(app);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
