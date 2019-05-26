const path = require('path');
const defer = require('config/defer').deferConfig;

module.exports = {
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  crypto: {
    hash: {
      length: 128,
      iterations: 10,
    },
  },
  logger: {
    // logLevel
    level: 'debug',
  },
  mongodb: {
    debug: true,
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mo_trip',
  },
  redis: {
    uri: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  },
  server: {
    host: 'http://localhost',
    port: process.env.PORT || 3001,
    domain: process.env.DOMAIN || 'http://localhost:3001',
  },
  mailer: {
    gmail: {
      user: 'venyaPac@gmail.com',
      password: 'VenyaQw123456',
    },
    senders: {
      // transactional emails, register/forgot pass etc
      default: {
        fromEmail: 'venyaPac.mailer@gmail.com',
        fromName: 'JavaScript.ru',
        signature: '<em>С уважением,<br>Javascript.ru</em>',
      },
    },
  },
};
