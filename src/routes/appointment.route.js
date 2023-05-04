const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", appointmentController.createAppointment);
router.get("/getAll", appointmentController.getAllAppointments);
router.get("/getById/:id", appointmentController.getAppointmentById);
router.put("/updateById/:id", appointmentController.updateAppointmentById);
router.delete("/deleteById/:id", appointmentController.deleteAppointmentById);

module.exports = router;



