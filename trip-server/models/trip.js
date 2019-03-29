const mongoose = require('../libs/mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

var tripSchema = new Schema({
  from: String,
  to: String,
  date: { type: Date, default: moment() },
  seats: { type: Number, default: 3 },
  coast: { type: Number, default: 100 },
});

module.exports = mongoose.model('Trip', tripSchema);
