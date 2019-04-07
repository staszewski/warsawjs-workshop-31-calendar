const express = require('express');
const router = require('../web/routing/base.router.js');
const supertest = require('supertest');

let app;
it('jasmine is working', () => {
  expect(1).toBe(1);
});

beforeEach(() => {
  app = express();
  router(app);
});

it('get /', async () => { 
  const res = await supertest(app).get('/');
  expect(res.body.status).toEqual('ok')
});



