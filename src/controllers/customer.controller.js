const CustomerSchema = require('../models/customer.model');
const bcrypt = require('bcrypt');

// async function createCustomer (req, res) {
//   const customer = await CustomerSchema(req.body);
//   customer
//     .save()
//     .then((customer) => res.status(201).json(customer))
//     .catch((err) => res.status(400).json({ message: 'Error to create customers', error: err.message }));
// }


async function loginCustomer (req, res){
  const body = req.body;
  const customer = await CustomerSchema.findOne({ email: body.email });
  if (customer) {
    const validPassword = await bcrypt.compare(body.password, customer.password);
    if (validPassword) {
      res.status(201).json(customer);
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(401).json({ error: "Customer does not exist" });
  }
}


async function createCustomer (req, res){
  const body = req.body;
  if (!(body.email && body.password)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }
  const customer = new CustomerSchema(body);
  const salt = await bcrypt.genSalt(10);
  customer.password = await bcrypt.hash(customer.password, salt);
  customer
  .save()
  .then((customer) => res.status(201).json(customer))
  .catch((err) => res.status(400).json({ message: 'Error to create customers', error: err.message }));
}

async function getAllCustomers(req, res) {
  await CustomerSchema
    .find()
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customers found', error: err.message }));
}

async function getCustomerById(req, res) {
  const { id } = req.params;
  await CustomerSchema
    .findById(id)
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(404).json({ message: 'No customer found', error: err.message }));
}

async function updateCustomerById(req, res) {
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

async function deleteCustomerById(req, res) {
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
  deleteCustomerById,
  loginCustomer
};