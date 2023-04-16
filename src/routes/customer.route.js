const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create/customer", customerController.createCustomer);
// Example of route protected by token
// router.get("/getAll/customers", itsAuth , customerController.getAllCustomers);
router.get("/getAll/customers", customerController.getAllCustomers);
router.get("/getById/customers/:id", customerController.getCustomerById);
router.put("/updateById/customers/:id", customerController.updateCustomerById);
router.delete("/deleteById/customers/:id", customerController.deleteCustomerById);
router.post("/login/customer", customerController.loginCustomer);

module.exports = router;



