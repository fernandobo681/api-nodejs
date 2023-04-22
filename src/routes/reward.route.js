const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/reward.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", rewardController.createReward);
router.get("/getAll", rewardController.getAllRewards);
router.get("/getById/:id", rewardController.getRewardById);
router.put("/updateById/:id", rewardController.updateRewardById);
router.delete("/deleteById/:id", rewardController.deleteRewardById);

module.exports = router;



