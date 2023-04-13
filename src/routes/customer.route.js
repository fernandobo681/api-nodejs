const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

router.post("/create/customer", customerController.createCustomer);
router.get("/getAll/customers", customerController.getAllCustomers);
router.get("/getById/customers/:id", customerController.getCustomerById);
router.put("/updateById/customers/:id", customerController.updateCustomerById);
router.delete("/deleteById/customers/:id", customerController.deleteCustomerById);
router.post("/login/customer", customerController.loginCustomer);

module.exports = router;



