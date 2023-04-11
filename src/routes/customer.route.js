const express = require('express');
const router = express.Router();

const CustomerSchema = require('../models/customer.model');

// create customer
router.post('/create/customer', (req, res) => {
    const customer = CustomerSchema(req.body);
    customer
        .save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


// get all customers
router.get("/getAll/customers", (req, res) => {
    CustomerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// get a customer
router.get("/getById/customers/:id", (req, res) => {
    const { id } = req.params;
    CustomerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



// update a customer
router.put("/updateById/customers/:id", (req, res) => {
    const { id } = req.params;
    const { 
        name,
        email,
        phone,
        password,
        reward_points,
        addresses,
        payment_methods,
        coordinates
    } = req.body;
    CustomerSchema
        .findOneAndUpdate({ _id: id }, { $set: { 
            name,
            email,
            phone,
            password,
            reward_points,
            addresses,
            payment_methods ,
            coordinates 
        }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// delete a customer
router.delete("/deleteById/customers/:id", (req, res) => {
    const { id } = req.params;
    CustomerSchema
      .findOneAndDelete({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;



