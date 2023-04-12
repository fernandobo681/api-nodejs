const CustomerSchema = require('../models/customer.model');

module.exports.createCustomer = (req, res) => {
  const customer = CustomerSchema(req.body);
  customer
    .save().then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

module.exports.getAllCustomers = (req, res) => {
  CustomerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

module.exports.getCustomerById = (req, res) => {
  const { id } = req.params;
  CustomerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

module.exports.updateCustomerById = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, password, reward_points, addresses, payment_methods, coordinates } = req.body;
  CustomerSchema
    .findOneAndUpdate({ _id: id }, {
      $set: {
        name,
        email,
        phone,
        password,
        reward_points,
        addresses,
        payment_methods,
        coordinates
      }
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

module.exports.deleteCustomerById = (req, res) => {
  const { id } = req.params;
  CustomerSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}