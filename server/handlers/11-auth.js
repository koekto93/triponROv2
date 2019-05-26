// middleware.js
const jwt = require('jsonwebtoken');
const config = require('config');

exports.init = app =>
  app.use(async (ctx, next) => {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;
    if (!token) {
      ctx.status = 401;
      ctx.body = { message: 'Unauthorized: No token provided' };
    } else {
      const secret = config.get('secret');
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          ctx.status = 401;
          ctx.body = { message: 'Unauthorized: Invalid token' };
        } else {
          ctx.email = decoded.email;
          next();
        }
      });
    }
  });
