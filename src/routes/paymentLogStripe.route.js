const express = require('express');
const router = express.Router();
const paymentLogStripeController = require('../controllers/paymentLogStripeSchema.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", paymentLogStripeController.createPaymentLogStripe);
router.get("/getAll", paymentLogStripeController.getAllPaymentLogStripes);
router.get("/getById/:id", paymentLogStripeController.getPaymentLogStripeById);
router.put("/updateById/:id", paymentLogStripeController.updatePaymentLogStripeById);
router.delete("/deleteById/:id", paymentLogStripeController.deletePaymentLogStripeById);

module.exports = router;



