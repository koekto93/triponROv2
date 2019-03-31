const mongoose = require('../libs/mongoose');
const moment = require('moment');
const pick = require('lodash/pick');

const publicFields = ['from', 'to', 'date', 'seats', 'coast'];

const tripSchema = new mongoose.Schema(
  {
    from: String,
    to: String,
    date: { type: Date, default: moment() },
    seats: { type: Number, default: 3 },
    coast: { type: Number, default: 100 },
  },
  {
    timestamps: true,
    toObject: {
      transform(doc, ret, options) {
        return pick(ret, [...publicFields, '_id']);
      },
    },
  },
);

tripSchema.statics.publicFields = publicFields;

module.exports = mongoose.model('Trip', tripSchema);
