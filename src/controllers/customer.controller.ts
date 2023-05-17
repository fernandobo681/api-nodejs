import CustomerSchema from '../models/customer.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// async function createCustomer (req, res) {
//   const customer = await CustomerSchema(req.body);
//   customer
//     .save()
//     .then((customer) => res.status(201).json(customer))
//     .catch((err) => res.status(400).json({ message: 'Error to create customers', error: err.message }));
// }


export async function loginCustomer(req, res) {
  const body = req.body;
  const customer = await CustomerSchema.findOne({ email: body.email });
  if (customer) {
    const validPassword = await bcrypt.compare(body.password, customer.password);
    if (validPassword) {
      const token = jwt.sign({ email: customer.email }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
      res.status(201).json({ success: true, message: 'Customer loged successfully', token: 'Bearer ' + token, data: customer });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } else {
    res.status(401).json({ success: false, message: "Customer doesn't exist" });
  }
}

export async function createCustomer(req, res) {
  const body = req.body;
  if (!(body.email && body.password)) {
    return res.status(400).send({ success: false, message: "Data not formatted properly" });
  }
  const customer = new CustomerSchema(body);
  const salt = await bcrypt.genSalt(10);
  customer.password = await bcrypt.hash(customer.password, salt);
  customer
    .save()
    .then((customer) => res.status(201).json({ success: true, message: 'Customer created successfully', data: customer }))
    .catch((err) => res.status(400).json({ success: false, message: 'Error to create customers: ' + err.message }));
}

export async function getAllCustomers(req, res) {
  await CustomerSchema
    .find()
    .then((customer) =>  {

      if(customer.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all customers successfully', data: customer })
      } else {
        res.status(404).json({ success: false, message: 'No customers found' });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No customers found: ' + err.message }));
}

export async function getCustomerById(req, res) {
  const { id } = req.params;
  await CustomerSchema
    .findById(id)
    .then((customer) => { 
        res.status(200).json({ success: true, message: 'Get customer by id successfully', data: customer })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No customer found:' + err.message }));
}

export async function updateCustomerById(req, res) {
  const { id } = req.params;
  const { name, email, phone, reward_points, addresses, payment_methods, coordinates, vehicles } = req.body;
  await CustomerSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, email, phone, reward_points, addresses, payment_methods, coordinates, vehicles }
    })
    .then((customerUpdated) => {
      if (customerUpdated) {
        CustomerSchema
          .findById(id)
          .then((customer) => res.status(201).json({ success: true, message: 'Customer updated successfully', data: customer }))
          .catch((err) => res.status(404).json({ success: false, message: 'No customer found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No customer found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update customers: ' + err.message }));
}

export async function deleteCustomerById(req, res) {
  const { id } = req.params;
  await CustomerSchema
    .findOneAndDelete({ _id: id })
    .then((customer) => {
      customer ? res.status(201).json({ success: true, message: 'Customer deleted successfully', data: customer }) : res.status(404).json({ success: false, message: 'No customer found'});
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete customers: ' + err.message }));
}
