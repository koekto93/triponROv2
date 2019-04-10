const logger = require('../libs/logger');

exports.init = app =>
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err.status) {
        console.log('error', err);
        //ctx.flash('error', e.message);
        ctx.status = err.status || 500;
        ctx.body = { message: err.message };
      } else if (err.name === 'ValidationError') {
        console.log('Ошибка валидации', err.errors);
        for (let field in err.errors) {
          ctx.flash('error', `${field}: ${err.errors[field].message}`);
        }
      } else {
        ctx.status = 500;
        ctx.body = { message: err.message };
        logger.error(err.message, { requestId: ctx.requestId });
      }
    }
  });
