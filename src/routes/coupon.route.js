const express = require('express');
const router = express.Router();
const couponController = require('../controllers/coupon.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", couponController.createCoupon);
router.get("/getAll", couponController.getAllCoupons);
router.get("/getById/:id", couponController.getCouponById);
router.put("/updateById/:id", couponController.updateCouponById);
router.delete("/deleteById/:id", couponController.deleteCouponById);

module.exports = router;



