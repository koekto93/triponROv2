const moment = require('moment');

const Trip = require('../../models/Trip');

const getTrip = async message => {
  let answer =
    "Некорректный формат даты, попробуйте снова. Требуемый формат 'Поездка 12.11 или Поездки дд.мм - дд.мм'";
  const date = message.match(/\d{1,2}/g); // находим все даты
  if (date && date.length == 2) {
    answer = await getTripByDate(date);
  } else if (date && date.length == 4) {
    answer = await getTripByInterval(date);
  }
  return answer;
};

const getTripByDate = ([date, month]) => {
  return Trip.find({
    date: {
      $gte: moment(`2019-${month}-${date} 00:00`, 'YYYY-MM-DD H:m'),
      $lt: moment(`2019-${month}-${date} 23:59`, 'YYYY-MM-DD H:m'),
    },
  }).then(result => {
    if (result.length) {
      return JSON.stringify(result);
    } else {
      return 'Поездок в этот день нет';
    }
  });
};

const getTripByInterval = ([startDate, startMonth, endDate, endMonth]) => {
  return Trip.find({
    date: {
      $gte: moment(`2019-${startMonth}-${startDate} 00:00`, 'YYYY-MM-DD H:m'),
      $lt: moment(`2019-${endMonth}-${endDate} 23:59`, 'YYYY-MM-DD H:m'),
    },
  }).then(result => {
    if (result.length) {
      return JSON.stringify(result);
    } else {
      return 'Поездок с такими параметрами не найдено';
    }
  });
};

const getTripByLocation = mess => {};

exports.getTrip = getTrip;
exports.getTripByDate = getTripByDate;
exports.getTripByInterval = getTripByInterval;
