const EventTrackerSchema = require('../models/eventTracker.model');

async function createEventTracker (req, res) {
  const eventTracker = await EventTrackerSchema(req.body);
  eventTracker
  .save()
  .then((eventTracker) => res.status(201).json({ success: true, message: 'EventTracker created successfully', data: eventTracker }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create eventTracker: ' + err.message }));
}

async function getAllEventTrackers(req, res) {
  await EventTrackerSchema
    .find()
    .then((eventTrackers) =>  {
      if(eventTrackers.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all eventTrackers successfully', data: eventTrackers })
      } else {
        res.status(404).json({ success: false, message: 'No eventTrackers found: ' + err.message });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No eventTrackers found: ' + err.message }));
}


async function getEventTrackerById(req, res) {
  const { id } = req.params;
  await EventTrackerSchema
    .findById(id)
    .then((eventTracker) => { 
        res.status(200).json({ success: true, message: 'Get eventTracker by id successfully', data: eventTracker })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No eventTracker found:' + err.message }));
}

async function updateEventTrackerById(req, res) {
  const { id } = req.params;
  const { event_name, module, notes, user } = req.body;
  await EventTrackerSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { event_name, module, notes, user  }
    })
    .then((eventTrackerUpdated) => {
      if (eventTrackerUpdated) {
        EventTrackerSchema
          .findById(id)
          .then((eventTracker) => res.status(201).json({ success: true, message: 'eventTracker updated successfully', data: eventTracker }))
          .catch((err) => res.status(404).json({ success: false, message: 'No eventTracker found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No eventTracker found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update eventTracker: ' + err.message }));
}

async function deleteEventTrackerById(req, res) {
  const { id } = req.params;
  await EventTrackerSchema
    .findOneAndDelete({ _id: id })
    .then((eventTracker) => {
      eventTracker ? res.status(201).json({ success: true, message: 'EventTracker deleted successfully', data: eventTracker }) : res.status(404).json({ success: false, message: 'No eventTracker found: ' + err.message });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete eventTracker: ' + err.message }));
}

module.exports = {
    getAllEventTrackers,
    createEventTracker,
    getEventTrackerById,
    updateEventTrackerById,
    deleteEventTrackerById
};