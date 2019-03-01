var ObjectID = require('mongodb').ObjectID; //MongoDB требуется ID не в виде строки, а в виде специального объекта
const Note = require('../../models/note');

module.exports = function(app, db) {
  app.get('/notes', (req, res) => {
    Note.find({})
      .then(result => res.send(result))
      .catch(error => res.send({ error: 'Проблема получения заметок' }));
  });

  //запрос на получение заметки по id
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    Note.findById(id)
      .then(result => res.send(result))
      .catch(error =>
        res.send({ error: 'Проблема получения заметки по айди' }),
      );
  });
  //запрос на удаление заметки
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: id };
    Note.deleteOne(details)
      .then(result => res.send(`Статья ${id} удалена`))
      .catch(error =>
        res.send({ error: 'Некорректное удаление заметки', error }),
      );
  });
  //запрос на создание заметки
  app.post('/notes', (req, res) => {
    const note = new Note({ body: req.body.body, title: req.body.title });
    note
      .save()
      .then(result => res.send(result))
      .catch(error =>
        res.send({ error: 'Ошибка: проблема с создание заметки' }),
      );
  });
  //запрос на модификацию заметки
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: id };
    const note = { body: req.body.body, title: req.body.title }; //если данных не будет, то они все равно перезатрут старые данные
    Note.findByIdAndUpdate(id, note)
      .then(result => res.send(note))
      .catch(error =>
        res.send({ error: 'Ошибка: проблема с модификацией заметки' }),
      );
  });
};
