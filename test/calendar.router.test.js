const express = require('express');
const router = require('../web/routing/calendar.router.js');
const supertest = require('supertest');
const days = require('dayjs');
const Ajv = require('ajv');
const buildCalendar = require('../utils/calendar.js');
const ajv = new Ajv({ schemaId: 'auto' });
let app;

beforeEach(() => {
  app = express();
  router(app);
});

it('/api/calendar shoud get 404', async () => {
  const res = await supertest(app).get('/api/calendar').expect(200)  
});

it('validate schema', async () => {
  const schema = require('../docs/schemas/calendar.scheme.json');
  const validate = ajv.compile(schema);

  await supertest(app)
          .get('/api/calendar')
          .expect(200)
          .then(res => {
            const valid = validate(res.body);
            expect(valid).toBeTruthy();
            expect(validate.errors).toBeNull();
            console.log('validate errros', validate.errors);          
          })
});

it('test buildCalendar', async () => {
  const calendar = buildCalendar(1);
  expect(calendar[0]).toEqual('Sun, 28 Dec 1969 23:00:00 GMT')
});
