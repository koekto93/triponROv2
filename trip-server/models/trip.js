const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

var TripSchema = new Schema({
  from: String,
  to: String,
  date: { type: Date, default: moment() },
  seats: { type: Number, default: 3 },
  coast: { type: Number, default: 100 },
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;
