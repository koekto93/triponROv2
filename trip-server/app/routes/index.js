const tripRoutes = require('./trip_routes');
module.exports = function(app, db) {
  tripRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
