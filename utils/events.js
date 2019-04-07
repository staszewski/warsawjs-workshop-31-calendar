const EventModel = require('../models/event-model');

async function createEvent(data) {
    const model = await EventModel.create(data);
    return model._id;
};

async function deleteEventById(id) {
    await EventModel.deleteOne({ _id: id });
    return id;
};

module.exports = {
  createEvent,
  deleteEventById
}
