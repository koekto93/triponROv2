const Trip = require('../models/Trip');

exports.get = async function(ctx) {
  ctx.body = await Trip.find({});
};

exports.getСertainEntity = async function(ctx) {
  console.log('getСertainEntity');
  ctx.body = await Trip.findById(ctx.params.id);
};

exports.post = async function(ctx) {
  console.log('getСertainEntity getСertainEntity');
  /* ctx.body = await Trip.create({
    from: req.body.from,
    to: req.body.to,
    //date: req.body.date,
    seats: req.body.seats,
    coast: req.body.coast,
  }); */
};

exports.put = async function(ctx) {
  console.log('put');
  const id = req.params.id;
  const trip = { body: req.body.body, title: req.body.title }; //если данных не будет, то они все равно перезатрут старые данные
  ctx.body = await Trip.findByIdAndUpdate(id, trip);
};

exports.delete = async function(ctx) {
  console.log('delete');
  const id = req.params.id;
  const details = { _id: id }; //по возможности упростить в одну строчку
  ctx.body = await Trip.deleteOne(details);
};
