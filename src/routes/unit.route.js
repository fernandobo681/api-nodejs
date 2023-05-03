const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unit.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", unitController.createUnit);
router.get("/getAll", unitController.getAllUnits);
router.get("/getById/:id", unitController.getUnitById);
router.put("/updateById/:id", unitController.updateUnitById);
router.delete("/deleteById/:id", unitController.deleteUnitById);

module.exports = router;



