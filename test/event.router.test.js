const express = require('express');
const router = require('../web/routing/event.router.js');
const bodyParser = require('body-parser');
const supertest = require('supertest');
const EventModel = require('../models/event-model.js');
const {connect} = require('../db');
let app;

const fakeData = () => ({
  title: 'supertest',
  description: 'test',
  time: '2017-03-22',
  notification: false,
});

beforeAll(async () => {
  await connect();
});

beforeEach(() => {
  app = express();
  app.use(bodyParser.json());
  router(app);
});

afterEach(async () => {
  await EventModel.deleteMany({title: 'supertest'});
});

it('post /api/event', async () => {
  const model = new EventModel();
  await model.save();
  const res = await supertest(app)
    .post('/api/event')
    .send(fakeData())
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200);

  expect(res.body.id).not.toBeNull();

  const list = await EventModel.find({title: 'supertest'});
  expect(list.length).toEqual(1);
});

it('delete /api/event/:id', async () => {
  const model = new EventModel(fakeData());
  await model.save();

  const list = await EventModel.find({title: 'supertest'});
  expect(list.length).toEqual(1);
  const res = await supertest(app)
    .delete(`/api/event/${model._id}`)
    .set('Accept', 'application/json')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200);

  const list2 = await EventModel.find({title: 'supertest'});
  expect(list2.length).toEqual(0);
});

it('put /api/event/:id', async () => {
  const model = new EventModel(fakeData());
  await model.save();

  const id = model._id;

  const res = await supertest(app)
    .put(`/api/event/${id}`)
    .send(Object.assign(fakeData()), {
      title: 'updejt',
    })
    .set('Accept', 'application/json')
    .expect(200);
});
