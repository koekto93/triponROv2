const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const config = require('config');

require('./handlers/00-requestid').init(app);
require('./handlers/01-favicon').init(app);
require('./handlers/02-static').init(app);
require('./handlers/03-logger').init(app);
//require('./handlers/04-templates').init(app);
require('./handlers/05-errors').init(app);
require('./handlers/06-session').init(app);
require('./handlers/07-bodyParser').init(app);
require('./handlers/08-passport').init(app);
require('./handlers/09-flash').init(app);
require('./handlers/10-csrf').init(app);

router.get('/trip', require('./routes/trip').get);
router.get('/trip/:id', require('./routes/trip').getСertainEntity);
router.post('/trip', require('./routes/trip').post);
router.put('/trip', require('./routes/trip').put);
router.delete('/trip', require('./routes/trip').delete);
/* router.get('/', require('./routes/frontpage').get);
router.post('/login', require('./routes/login').post);
router.post('/logout', require('./routes/logout').post);
router.get('/register', require('./routes/register').get);
router.post('/register', require('./routes/register').post);
router.get('/confirm/:verifyEmailToken', require('./routes/confirm').get); */

app.use(router.routes());

module.exports = app;
