const EventModel = require('../models/event-model');

async function createEvent(data) {
    const model = await EventModel.create(data);
    return model._id;
};

async function deleteEventById(id) {
    await EventModel.deleteOne({ _id: id });
    return id;
};

async function updateEventById(id, data) {
  await EventModel.updateOne({ _id: id }, data)
};

module.exports = {
  createEvent,
  deleteEventById,
  updateEventById
}
