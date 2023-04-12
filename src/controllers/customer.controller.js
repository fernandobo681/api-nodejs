const CustomerSchema = require('../models/customer.model');

module.exports.createCustomer = (req, res) => {
  const customer = CustomerSchema(req.body);
  customer
    .save()
    .then((customer) => res.status(201).json(customer))
    .catch((err) => res.status(400).json({ message: 'Error to create customers', error: err.message }));
}

module.exports.getAllCustomers = (req, res) => {
  CustomerSchema
    .find()
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customers found', error: err.message }));
}

module.exports.getCustomerById = (req, res) => {
  const { id } = req.params;
  CustomerSchema
    .findById(id)
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customer found', error: err.message }));
}

module.exports.updateCustomerById = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, password, reward_points, addresses, payment_methods, coordinates } = req.body;
  CustomerSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, email, phone, password, reward_points, addresses, payment_methods, coordinates }
    })
    .then(() => {
      CustomerSchema
        .findById(id)
        .then((customer) => res.status(201).json(customer))
        .catch((err) => res.status(404).json({ message: 'No customer found', error: err.message }));
    })
    .catch((err) => res.status(400).json({ message: 'Error to update customers', error: err.message }));
}

module.exports.deleteCustomerById = (req, res) => {
  const { id } = req.params;
  CustomerSchema
    .findOneAndDelete({ _id: id })
    .then((customer) => res.status(201).json(customer))
    .catch((err) => res.status(400).json({ message: 'Error to delete customers', error: err.message }));
}