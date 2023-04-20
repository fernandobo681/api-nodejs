const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", customerController.createCustomer);
// Example of route protected by token
// router.get("/getAll", itsAuth , customerController.getAllCustomers);
router.get("/getAll", customerController.getAllCustomers);
router.get("/getById/:id", customerController.getCustomerById);
router.put("/updateById/:id", customerController.updateCustomerById);
router.delete("/deleteById/:id", customerController.deleteCustomerById);
router.post("/login", customerController.loginCustomer);

module.exports = router;



