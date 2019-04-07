const EventModel = require('../models/event-model');

async function createEvent(data) {
    const model = await EventModel.create(data);
    return model;
};

module.exports = {
  createEvent
}
