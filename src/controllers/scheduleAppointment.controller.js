const ScheduleAppointmentSchema = require('../models/scheduleAppointment.model');

async function createScheduleAppointment (req, res) {
  const scheduleAppointment = await ScheduleAppointmentSchema(req.body);
  scheduleAppointment
  .save()
  .then((scheduleAppointment) => res.status(201).json({ success: true, message: 'ScheduleAppointment created successfully', data: scheduleAppointment }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create scheduleAppointment: ' + err.message }));
}

async function getAllScheduleAppointments(req, res) {
  await ScheduleAppointmentSchema
    .find()
    .then((scheduleAppointments) =>  {
      if(scheduleAppointments.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all scheduleAppointments successfully', data: scheduleAppointments })
      } else {
        res.status(404).json({ success: false, message: 'No scheduleAppointments found: ' + err.message });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No scheduleAppointments found: ' + err.message }));
}


async function getScheduleAppointmentById(req, res) {
  const { id } = req.params;
  await ScheduleAppointmentSchema
    .findById(id)
    .then((scheduleAppointment) => { 
        res.status(200).json({ success: true, message: 'Get scheduleAppointment by id successfully', data: scheduleAppointment })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No scheduleAppointment found:' + err.message }));
}

async function updateScheduleAppointmentById(req, res) {
  const { id } = req.params;
  const { service, customer, unit_id } = req.body;
  await ScheduleAppointmentSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { service, customer, unit_id }
    })
    .then((scheduleAppointmentUpdated) => {
      if (scheduleAppointmentUpdated) {
        ScheduleAppointmentSchema
          .findById(id)
          .then((scheduleAppointment) => res.status(201).json({ success: true, message: 'scheduleAppointment updated successfully', data: scheduleAppointment }))
          .catch((err) => res.status(404).json({ success: false, message: 'No scheduleAppointment found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No scheduleAppointment found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update scheduleAppointment: ' + err.message }));
}

async function deleteScheduleAppointmentById(req, res) {
  const { id } = req.params;
  await ScheduleAppointmentSchema
    .findOneAndDelete({ _id: id })
    .then((scheduleAppointment) => {
      scheduleAppointment ? res.status(201).json({ success: true, message: 'ScheduleAppointment deleted successfully', data: scheduleAppointment }) : res.status(404).json({ success: false, message: 'No scheduleAppointment found: ' + err.message });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete scheduleAppointment: ' + err.message }));
}

module.exports = {
    getAllScheduleAppointments,
    createScheduleAppointment,
    getScheduleAppointmentById,
    updateScheduleAppointmentById,
    deleteScheduleAppointmentById
};