const User = require('../models/User');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');
const logger = require('../libs/logger');

exports.post = async function(ctx) {
  const verifyEmailToken = uuid4();
  const email = ctx.request.body.email.toLowerCase();
  logger.info('creating user model', { requestId: ctx.requestId });

  console.log(ctx.request.body);

  try {
    const user = new User({
      email,
      displayName: ctx.request.body.displayName,
      verifyEmailToken: verifyEmailToken,
      verifiedEmail: false,
    });

    await user.setPassword(ctx.request.body.password);

    await user.save();
  } catch (err) {
    if (err.name === 'ValidationError') {
      console.log('valid error in register', err.errors);
      let errorMessages = '';
      for (let key in err.errors) {
        errorMessages += `${key}: ${err.errors[key].message}<br>`;
      }
      //ctx.flash('error', errorMessages);
      console.log('catch', errorMessages);
      ctx.status = err.status || 500;
      ctx.body = { message: errorMessages };
      return ctx.redirect('/register');
    } else {
      console.log(err);
      throw err;
    }
  }

  logger.info('user model has been created', { requestId: ctx.requestId });
  logger.info('sending email', { requestId: ctx.requestId });
  await sendMail({
    template: 'verify-registration-email',
    to: email,
    subject: 'Подтверждение email',
    link: `${config.get('server.domain')}/confirm/${verifyEmailToken}`,
  });
  logger.info('email has been sent', { requestId: ctx.requestId });

  /* ctx.flash(
    'info',
    'Вы зарегистрированы. Пожалуйста, загляните в почтовый ящик, там письмо с Email-подтверждением.',
  ); */
  ctx.body =
    'Вы зарегистрированы. Пожалуйста, загляните в почтовый ящик, там письмо с Email-подтверждением.';
  //ctx.redirect('/');
};
