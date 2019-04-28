// middleware.js
const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');

async function authByToken(ctx, next) {
  const token = ctx.headers['authorization'];

  if (!token) {
    ctx.status = 401;
    ctx.body = { message: 'Unauthorized: No token provided' };
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        ctx.status = 401;
        ctx.body = { message: 'Unauthorized: Invalid token' };
      } else {
        next();
      }
    });
  }
}

module.exports = authByToken;
