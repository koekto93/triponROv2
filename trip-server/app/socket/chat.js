const WebSocket = require('ws');
const moment = require('moment');

const { getTrip, getTripByDate, getTripByInterval } = require('./helper');

const server = new WebSocket.Server({ port: 3000 });

/* 
Поездка 01.03 - 10.03
*/

server.on('connection', ws => {
  ws.on('message', async message => {
    if (message === 'exit') {
      ws.close();
    } else if (message === 'help') {
      ws.send(
        '<p>help</p><p>Поездка дд.мм</p><p>Поездки дд.мм - дд.мм</p><p>Из А в Б</p>',
      );
    }
    //Проверка на команду "Поездка дд.мм и поездки дд.мм-дд.мм"
    else if (message.search(/поездка|поездки/gi) !== -1) {
      ws.send(await getTrip(message));
    }
    //Проверка на команду "Из А в N", "Из А", "В N"
    else if (message.search(/поездка|поездки/gi) !== -1) {
      ws.send(await getTrip(message));
    } else {
      ws.send(
        '<p>Команда непонятна. Если возникли сложности, то введите "help"</p>',
      );
    }
  });
  ws.send('Добро пожаловать!');
});

module.exports = server;
