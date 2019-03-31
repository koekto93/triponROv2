const request = require('request-promise').defaults({
  resolveWithFullResponse: true,
  simple: false,
  json: true,
});
const assert = require('assert');
const mongoose = require('../libs/mongoose');

const Trip = require('../models/trip');
const app = require('../app');

function getURL(path) {
  return `http://localhost:3000${path}`;
}

describe('Trip REST API', async function() {
  let existingTripData = {
    from: 'Moscow',
    to: 'Desnogorsk',
    seats: 2,
    coast: 200,
  };
  let newTripData = {
    from: 'Desnogorsk',
    to: 'Tula',
    seats: 5,
    coast: 700,
  };
  let existingTrip;
  let server;

  before(done => {
    server = app.listen(3000, done);
  });

  after(done => {
    mongoose.disconnect();
    server.close(done);
  });

  beforeEach(async function() {
    // load fixtures
    await Trip.remove({});
    existingTrip = await Trip.create(existingTripData);
  });

  describe('POST /trip', async function() {
    it('creates a trip', async function() {
      const response = await request({
        method: 'post',
        uri: getURL('/trip'),
        body: newTripData,
      });
      const trip = await Trip.findById(response.body._id);

      assert.strictEqual(response.body.from, trip.from);
      assert.strictEqual(response.body.to, trip.to);
      assert.strictEqual(response.body.seats, trip.seats);
      assert.strictEqual(response.body.coast, trip.coast);
    });

    /* it('throws if email already exists', async function() {
      const response = await request({
        method: 'post',
        uri: getURL('/users'),
        body: existingUserData,
      });

      assert.strictEqual(response.statusCode, 400);
      assert.strictEqual(
        response.body.errors.email,
        'Такой email уже существует',
      );
    });

    it('throws if email not valid', async function() {
      const response = await request({
        method: 'post',
        uri: getURL('/users'),
        body: {
          email: 'invalid',
        },
      });
      assert.strictEqual(response.statusCode, 400);
      assert.strictEqual(response.body.errors.email, 'Некорректный email.');
    }); */
  });

  /* describe('GET /user/:userById', async function() {
    it('gets the user by id', async function() {
      const response = await request.get(getURL('/users/' + existingUser._id));

      assert.strictEqual(response.body.email, existingUser.email);
      assert.strictEqual(response.body._id, existingUser.id);
      assert.strictEqual(response.statusCode, 200);
      assert.ok(/application\/json/.test(response.headers['content-type']));
    });

    it('returns 404 if user does not exist', async function() {
      const response = await request.get(
        getURL('/users/55b693486e02c26010ef0000'),
      );
      assert.strictEqual(response.statusCode, 404);
    });

    it('returns 404 if invalid id', async function() {
      const response = await request.get(getURL('/users/kkkkk'));
      assert.strictEqual(response.statusCode, 404);
    });
  });

  describe('DELETE /user/:userById', async function() {
    it('removes user', async function() {
      const response = await request.del(getURL('/users/' + existingUser._id));
      const user = await User.findById(existingUser._id);

      assert.strictEqual(response.statusCode, 200);
      assert.ok(!user);
    });

    it('returns 404 if the user does not exist', async function() {
      const response = await request.del(
        getURL('/users/55b693486e02c26010ef0000'),
      );
      assert.strictEqual(response.statusCode, 404);
    });
  });

  it('GET /users gets all users', async function() {
    const response = await request.get(getURL('/users'));

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.length, 1);
    assert.strictEqual(response.body[0]._id, existingUser.id);
    assert.ok(/application\/json/.test(response.headers['content-type']));
  }); */
});
