const express = require('express');
const router = express.Router();
const couponRedeemedController = require('../controllers/couponRedeemed.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", couponRedeemedController.createCouponRedeemed);
router.get("/getAll", couponRedeemedController.getAllCouponsRedeemed);
router.get("/getById/:id", couponRedeemedController.getCouponRedeemedById);
router.put("/updateById/:id", couponRedeemedController.updateCouponRedeemedById);
router.delete("/deleteById/:id", couponRedeemedController.deleteCouponRedeemedById);

module.exports = router;



