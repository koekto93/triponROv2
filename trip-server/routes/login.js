const passport = require('../libs/passport');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.post = async (ctx, next) => {
  await passport.authenticate('local', async function(err, user, info) {
    if (err) throw err;

    if (user) {
      //await ctx.login(user);
      //ctx.body = { displayName: user.displayName, email: user.email };

      const secret = config.get('secret');

      const payload = {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
      };
      const token = jwt.sign(payload, secret); //здесь создается JWT

      ctx.body = { user: user.displayName, token: token };
    } else {
      ctx.status = 401;
      ctx.body = info;
    }
  })(ctx, next);
};
