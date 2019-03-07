const WebSocket = require('ws');
const moment = require('moment');

const { getTripByDate, getTripByInterval } = require('./helper');

const server = new WebSocket.Server({ port: 3000 });

/* 
Поездка 01.03 - 10.03
*/

server.on('connection', ws => {
  ws.on('message', message => {
    if (message === 'exit') {
      ws.close();
    } else if (message === 'help') {
      ws.send(
        '<p>help</p><p>Поездка дд.мм</p><p>Поездки дд.мм - дд.мм</p><p>Из А в Б</p>',
      );
    }
    //Проверка на команду "Поездка дд.мм и поездки дд.мм-дд.мм"
    else if (message.search(/поездка|поездки/gi) !== -1) {
      const date = message.match(/\d{1,2}/g); // находим все даты
      if (date && date.length == 2) {
        getTripByDate(date, ws);
      } else if (date && date.length == 4) {
        getTripByInterval(date, ws);
      } else {
        ws.send(
          "Некорректный формат даты, попробуйте снова. Требуемый формат 'Поездка 12.11 или Поездки дд.мм - дд.мм'",
        );
      }
    } else {
      ws.send(
        '<p>Команда непонятна. Если возникли сложности, то введите "help"</p>',
      );
      /* server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      }); */
    }
  });

  ws.send('Добро пожаловать!');
});

module.exports = server;
