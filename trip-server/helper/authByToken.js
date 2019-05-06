// middleware.js
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

async function authByToken(ctx, next) {
  const token = ctx.headers["authorization"];

  if (!token) {
    ctx.status = 401;
    ctx.body = { message: "Unauthorized: No token provided" };
  } else {
    let verification = false;
    await jwt.verify(token, secret, function(err) {
      if (err) {
        ctx.status = 401;
        ctx.body = { message: "Unauthorized: Invalid token" };
      } else {
        verification = true;
      }
    });
    verification ? await next() : false;
  }
}

module.exports = authByToken;
