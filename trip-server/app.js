const Koa = require('koa');
const Router = require('koa-router');
//const cors = require('koa-cors');
var cors = require('koa2-cors');
const config = require('config');

const app = new Koa();
const router = new Router();
const loadById = require('./helper/loadById');
const options = {
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
};

app.use(cors(options));

require('./handlers/00-requestid').init(app);
require('./handlers/01-favicon').init(app);
require('./handlers/02-static').init(app);
//require('./handlers/03-logger').init(app);
//require('./handlers/04-templates').init(app);
require('./handlers/05-errors').init(app);
require('./handlers/06-session').init(app);
require('./handlers/07-bodyParser').init(app);
require('./handlers/08-passport').init(app);
require('./handlers/09-flash').init(app);
//require('./handlers/10-csrf').init(app);

router
  .get('/trip', require('./routes/trip').get)
  .post('/trip', require('./routes/trip').post)
  .get('/trip/:tripId', loadById, require('./routes/trip').getСertainEntity)
  .put('/trip/:tripId', loadById, require('./routes/trip').put)
  .del('/trip/:tripId', loadById, require('./routes/trip').delete);

router.post('/auth/login', require('./routes/login').post);
//.post('/logout', require('./routes/logout').post);

app.use(router.routes());

module.exports = app;
