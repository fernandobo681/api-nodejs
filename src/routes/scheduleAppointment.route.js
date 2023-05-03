const express = require('express');
const router = express.Router();
const scheduleAppointmentController = require('../controllers/scheduleAppointment.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", scheduleAppointmentController.createScheduleAppointment);
router.get("/getAll", scheduleAppointmentController.getAllScheduleAppointments);
router.get("/getById/:id", scheduleAppointmentController.getScheduleAppointmentById);
router.put("/updateById/:id", scheduleAppointmentController.updateScheduleAppointmentById);
router.delete("/deleteById/:id", scheduleAppointmentController.deleteScheduleAppointmentById);

module.exports = router;



