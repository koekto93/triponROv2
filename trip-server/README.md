### Запуск

```js
yarn dev
```

### Требования

- Созданный аккаунт и база данных на [сайте](https://mlab.com/home)
- Создать в корне папку config -> db.js с кодом:

```js
module.exports = {
  url: 'mongodb://user:password@ds251804.mlab.com:51804/notesdb',
};
```

#### [Мануал из habr](https://habr.com/company/ruvds/blog/321104/)

#### Запуск.

Нужна версия робомонги 1.3 бета

Из командной строки винды

```js
"C:\Program Files\MongoDB\Server\4.1\bin\mongod.exe" --dbpath="c:\data\db"
"C:\Program Files\MongoDB\Server\4.1\bin\mongo.exe"
```

запустить сервер из проекта
