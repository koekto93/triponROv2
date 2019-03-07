var ObjectID = require('mongodb').ObjectID; //MongoDB требуется ID не в виде строки, а в виде специального объекта
const Trip = require('../../models/trip');

module.exports = function(app, db) {
  app.get('/trips', (req, res) => {
    Trip.find({})
      .then(result => res.send(result))
      .catch(error => res.send({ error: 'Проблема получения поездок' }));
  });

  //запрос на получение поездки по id
  app.get('/trips/:id', (req, res) => {
    const id = req.params.id;
    Trip.findById(id)
      .then(result => res.send(result))
      .catch(error =>
        res.send({ error: 'Проблема получения поездки по айди' }),
      );
  });
  //запрос на удаление поездки
  app.delete('/trips/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: id };
    Trip.deleteOne(details)
      .then(result => res.send(`Поездка ${id} удалена`))
      .catch(error =>
        res.send({ error: 'Некорректное удаление поездки', error }),
      );
  });
  //запрос на создание поездки
  app.post('/trips', (req, res) => {
    const note = new Trip({
      from: req.body.from,
      to: req.body.to,
      //date: req.body.date,
      seats: req.body.seats,
      coast: req.body.coast,
    });
    note
      .save()
      .then(result => res.send(result))
      .catch(error =>
        res.send({ error: 'Ошибка: проблема с создание поездки' }),
      );
  });
  //запрос на модификацию поездки
  app.put('/trips/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: id };
    const trip = { body: req.body.body, title: req.body.title }; //если данных не будет, то они все равно перезатрут старые данные
    Trip.findByIdAndUpdate(id, trip)
      .then(result => res.send(trip))
      .catch(error =>
        res.send({ error: 'Ошибка: проблема с модификацией поездки' }),
      );
  });
};
