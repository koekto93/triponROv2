const Koa = require('koa');
const Router = require('koa-router');
const config = require('config');

const app = new Koa();
const router = new Router({
  prefix: '/trip',
});
const loadById = require('./helper/loadById');

require('./handlers/00-requestid').init(app);
require('./handlers/01-favicon').init(app);
require('./handlers/02-static').init(app);
require('./handlers/03-logger').init(app);
//require('./handlers/04-templates').init(app);
require('./handlers/05-errors').init(app);
//require('./handlers/06-session').init(app);
require('./handlers/07-bodyParser').init(app);
require('./handlers/08-passport').init(app);
//require('./handlers/09-flash').init(app);
//require('./handlers/10-csrf').init(app);

router
  .get('/', require('./routes/trip').get)
  .post('/', require('./routes/trip').post)
  .get('/:tripId', loadById, require('./routes/trip').getСertainEntity)
  .put('/:tripId', loadById, require('./routes/trip').put)
  .del('/:tripId', loadById, require('./routes/trip').delete);

app.use(router.routes());

module.exports = app;
