const express = require('express');
const router = express.Router();
const buildCalendar = require('../../utils/calendar');

router.get('/api/calendar', (req, res) => {
  res.json({
    data: buildCalendar 
})});

module.exports = (app) => {
    app.use(router);
};
