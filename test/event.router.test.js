const express = require('express');
const router = require('../web/routing/event.router.js');
const bodyParser = require('body-parser');
const supertest = require('supertest');
const EventModel = require('../models/event-model.js');
const { connect } = require('../db');
let app;

const fakeData = () => ({
    title: 'supertest',
    description: 'test',
    time: '2017-03-22',
    notification: false
});

beforeAll(async () => {
  await connect();
});

beforeEach(() => {
  app = express();
  app.use(bodyParser.json());
  router(app);
});

it('/api/event', async () => {
  const model = new EventModel();
  await model.save();
  console.log(model)
  const res = await supertest(app)
              .post('/api/event')
              .send(fakeData())
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
            
  
});
