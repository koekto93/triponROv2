const mongoose = require("mongoose");
const Trip = require("../models/Trip");

//мидла на проверку ObjectId
async function loadById(ctx, next) {
  const id = ctx.params.tripId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    ctx.throw(404);
  }

  ctx.tripById = await Trip.findById(id);

  if (!ctx.tripById) {
    ctx.throw(404, "trip with this id not found");
  }

  await next();
}

module.exports = loadById;
