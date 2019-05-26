const app = require('./app');
const config = require('config');
const logger = require('./libs/logger');

app.listen(config.get('server.port'), () => {
  console.log('App is running');
});
