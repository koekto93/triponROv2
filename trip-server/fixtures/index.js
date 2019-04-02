const Trip = require('../models/Trip');
const User = require('../models/User');
const mongoose = require('../libs/mongoose');
const trips = require('./trips');
const users = require('./users');

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

(async () => {
  await User.remove();

  for (let user of users) {
    const u = new User(user);
    await u.setPassword(user.password);
    await u.save();
  }

  mongoose.disconnect();
  console.log(`All done, ${users.length} users have been saved in DB`);
})();
