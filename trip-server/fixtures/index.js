const Trip = require('../models/Trip');
const mongoose = require('../libs/mongoose');
const trips = require('./trips');

(async () => {
  await Trip.remove();

  for (let trip of trips) {
    const u = new Trip(trip);
    /* await u.setPassword(user.password); */
    await u.save();
  }

  mongoose.disconnect();
  console.log(`All done, ${trips.length} trips have been saved in DB`);
})();
