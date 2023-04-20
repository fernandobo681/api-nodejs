const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/banner.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", bannerController.createBanner);
router.get("/getAll", bannerController.getAllConfigurations);
router.get("/getById/:id", bannerController.getBannerById);
router.put("/updateById/:id", bannerController.updatebannerById);
router.delete("/deleteById/:id", bannerController.deletebannerById);

module.exports = router;



