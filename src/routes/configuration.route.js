const express = require('express');
const router = express.Router();
const configurationController = require('../controllers/configuration.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", configurationController.createConfiguration);
router.get("/getAll", configurationController.getAllConfigurations);
router.get("/getById/:id", configurationController.getConfigurationById);
router.put("/updateById/:id", configurationController.updateConfigurationById);
router.delete("/deleteById/:id", configurationController.deleteConfigurationById);

module.exports = router;



