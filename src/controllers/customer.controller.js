const CustomerSchema = require('../models/customer.model');

async function createCustomer (req, res) {
  const customer = await CustomerSchema(req.body);
  customer
    .save()
    .then((customer) => res.status(201).json(customer))
    .catch((err) => res.status(400).json({ message: 'Error to create customers', error: err.message }));
}

async function getAllCustomers (req, res) {
  await CustomerSchema
    .find()
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customers found', error: err.message }));
}

async function getCustomerById (req, res) {
  const { id } = req.params;
  await CustomerSchema
    .findById(id)
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customer found', error: err.message }));
}

async function updateCustomerById (req, res) {
  const { id } = req.params;
  const { name, email, phone, password, reward_points, addresses, payment_methods, coordinates } = req.body;
  await CustomerSchema
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

async function deleteCustomerById (req, res) {
  const { id } = req.params;
  await CustomerSchema
    .findOneAndDelete({ _id: id })
    .then((customer) => res.status(201).json(customer))
    .catch((err) => res.status(400).json({ message: 'Error to delete customers', error: err.message }));
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
};