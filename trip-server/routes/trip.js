const Trip = require('../models/Trip');
const pick = require('lodash/pick');

exports.get = async function(ctx) {
  const trips = await Trip.find({});
  ctx.body = trips.map(trip => trip.toObject());
};

exports.getСertainEntity = async function(ctx) {
  ctx.body = ctx.tripById.toObject();
};

exports.post = async function(ctx) {
  const user = await Trip.create(pick(ctx.request.body, Trip.publicFields));
  ctx.body = user.toObject();
};

exports.put = async function(ctx) {
  Object.assign(ctx.tripById, pick(ctx.request.body, Trip.publicFields)); //за место деструктуризации мы используем lodash
  await ctx.tripById.save();

  ctx.body = ctx.tripById.toObject();

  /* const id = ctx.params.id;
  const trip = await Trip.findById(id);
  ctx.body = await trip.updateOne({}); */
  //const trip = { body: req.body.body, title: req.body.title }; //если данных не будет, то они все равно перезатрут старые данные
  //ctx.body = await Trip.findByIdAndUpdate(id, trip);
};

exports.delete = async function(ctx) {
  await ctx.tripById.remove();
  ctx.body = 'ok';
};
