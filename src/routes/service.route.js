const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", serviceController.createService);
router.get("/getAll", serviceController.getAllServices);
router.get("/getById/:id", serviceController.getServiceById);
router.put("/updateById/:id", serviceController.updateServiceById);
router.delete("/deleteById/:id", serviceController.deleteServiceById);

module.exports = router;



