const express = require('express');
const router = express.Router();
const { createEvent } = require('../../utils/events');

router.post('/api/event', async (req, res) => {
  try {
    const params = req.body;
    const id = await createEvent();
    res.json({id})
  } catch(err) {
    console.error(err);
  }
});



module.exports = (app) => {
  app.use(router);
}
