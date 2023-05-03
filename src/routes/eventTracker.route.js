const express = require('express');
const router = express.Router();
const eventTrackerController = require('../controllers/eventTracker.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", eventTrackerController.createEventTracker);
router.get("/getAll", eventTrackerController.getAllEventTrackers);
router.get("/getById/:id", eventTrackerController.getEventTrackerById);
router.put("/updateById/:id", eventTrackerController.updateEventTrackerById);
router.delete("/deleteById/:id", eventTrackerController.deleteEventTrackerById);

module.exports = router;



