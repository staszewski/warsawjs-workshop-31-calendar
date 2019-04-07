const express = require('express');
const router = express.Router();
const { createEvent, deleteEventById, updateEventById } = require('../../utils/events');

router.post('/api/event', async (req, res) => {
  try {
    const params = req.body;
    const id = await createEvent(params);
    res.json({id})
  } catch(err) {
    console.error(err);
  }
});

router.delete('/api/event/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteEventById(id);
    res.json({ id })  
  } catch(err) {
    console.error(err)
  }
});

router.put('/api/event/:id'), async (req, res) => {
  try {
    const params = req.body;
    const id = req.params.id;
    await updateEventById(id, params);
    res.json({ id })
  } catch(err) {
    console.error(err)
  }
};


module.exports = (app) => {
  app.use(router);
}
