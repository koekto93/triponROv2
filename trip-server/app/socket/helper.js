const moment = require('moment');

const Trip = require('../../models/trip');

const getTripByDate = ([date, month], ws) => {
  Trip.find({
    date: {
      $gte: moment(`2019-${month}-${date} 00:00`, 'YYYY-MM-DD H:m'),
      $lt: moment(`2019-${month}-${date} 23:59`, 'YYYY-MM-DD H:m'),
    },
  }).then(result => {
    if (result.length) {
      return ws.send(JSON.stringify(result));
    } else {
      return ws.send('Поездок в этот день нет');
    }
  });
};

const getTripByInterval = ([startDate, startMonth, endDate, endMonth], ws) => {
  Trip.find({
    date: {
      $gte: moment(`2019-${startMonth}-${startDate} 00:00`, 'YYYY-MM-DD H:m'),
      $lt: moment(`2019-${endMonth}-${endDate} 23:59`, 'YYYY-MM-DD H:m'),
    },
  }).then(result => {
    if (result.length) {
      return ws.send(JSON.stringify(result));
    } else {
      return ws.send('Поездок с такими параметрами не найдено');
    }
  });
};

const getTripByLocation = () => {};

exports.getTripByDate = getTripByDate;
exports.getTripByInterval = getTripByInterval;
