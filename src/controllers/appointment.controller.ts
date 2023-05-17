import AppointmentSchema from '../models/appointment.model';

export async function createAppointment(req, res) {
  const appointment = await new AppointmentSchema(req.body);
  appointment
    .save()
    .then((appointment) => res.status(201).json({ success: true, message: 'Appointment created successfully', data: appointment }))
    .catch((err) => res.status(400).json({ success: false, message: 'Error to create appointment: ' + err.message }));
}

export async function getAllAppointments(req, res) {
  await AppointmentSchema
    .find()
    .then((appointments) => {
      if (appointments.length > 0) {
        res.status(200).json({ success: true, message: 'Get all appointments successfully', data: appointments })
      } else {
        res.status(404).json({ success: false, message: 'No appointments found' });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No appointments found: ' + err.message }));
}


export async function getAppointmentById(req, res) {
  const { id } = req.params;
  await AppointmentSchema
    .findById(id)
    .then((appointment) => {
      res.status(200).json({ success: true, message: 'Get appointment by id successfully', data: appointment })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No appointment found:' + err.message }));
}

export async function updateAppointmentById(req, res) {
  const { id } = req.params;
  const { customer, status, required_services, required_products, tracking_history_status, coordinates, qualification, unid_id, payment_type, cost } = req.body;
  await AppointmentSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { customer, status, required_services, required_products, tracking_history_status, coordinates, qualification, unid_id, payment_type, cost }
    })
    .then((appointmentUpdated) => {
      if (appointmentUpdated) {
        AppointmentSchema
          .findById(id)
          .then((appointment) => res.status(201).json({ success: true, message: 'appointment updated successfully', data: appointment }))
          .catch((err) => res.status(404).json({ success: false, message: 'No appointment found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No appointment found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update appointment: ' + err.message }));
}

export async function deleteAppointmentById(req, res) {
  const { id } = req.params;
  await AppointmentSchema
    .findOneAndDelete({ _id: id })
    .then((appointment) => {
      appointment ? res.status(201).json({ success: true, message: 'Appointment deleted successfully', data: appointment }) : res.status(404).json({ success: false, message: 'No appointment found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete appointment: ' + err.message }));
}
