const express = require('express');
const router = express.Router();
const { buildCalendar } = require('../../utils/calendar');

router.get('/api/calendar', (req, res) => {
      try {
        const month = req.query.month;
        const response = { data: [] }; 

        response.data = buildCalendar(month);
        // const events = await getEvents(dates);

        // response.data = events;
        res.json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/api/event', (req, res) => {
  res.json({status: 'ok'}) 
});

module.exports = (app) => {
    app.use(router);
};
