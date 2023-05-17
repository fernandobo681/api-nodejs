import PaymentLogStripeSchema from '../models/paymentLogStripe.model';

export async function createPaymentLogStripe (req, res) {
  const paymentLogStripe = await PaymentLogStripeSchema(req.body);
  paymentLogStripe
  .save()
  .then((paymentLogStripe) => res.status(201).json({ success: true, message: 'PaymentLogStripe created successfully', data: paymentLogStripe }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create paymentLogStripe: ' + err.message }));
}

export async function getAllPaymentLogStripes(req, res) {
  await PaymentLogStripeSchema
    .find()
    .then((paymentLogStripes) =>  {
      if(paymentLogStripes.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all paymentLogStripes successfully', data: paymentLogStripes })
      } else {
        res.status(404).json({ success: false, message: 'No paymentLogStripes found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No paymentLogStripes found: ' + err.message }));
}


export async function getPaymentLogStripeById(req, res) {
  const { id } = req.params;
  await PaymentLogStripeSchema
    .findById(id)
    .then((paymentLogStripe) => { 
        res.status(200).json({ success: true, message: 'Get paymentLogStripe by id successfully', data: paymentLogStripe })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No paymentLogStripe found:' + err.message }));
}

export async function updatePaymentLogStripeById(req, res) {
  const { id } = req.params;
  const { amount, currency, sale_id, customer } = req.body;
  await PaymentLogStripeSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { amount, currency, sale_id, customer }
    })
    .then((paymentLogStripeUpdated) => {
      if (paymentLogStripeUpdated) {
        PaymentLogStripeSchema
          .findById(id)
          .then((paymentLogStripe) => res.status(201).json({ success: true, message: 'paymentLogStripe updated successfully', data: paymentLogStripe }))
          .catch((err) => res.status(404).json({ success: false, message: 'No paymentLogStripe found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No paymentLogStripe found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update paymentLogStripe: ' + err.message }));
}

export async function deletePaymentLogStripeById(req, res) {
  const { id } = req.params;
  await PaymentLogStripeSchema
    .findOneAndDelete({ _id: id })
    .then((paymentLogStripe) => {
      paymentLogStripe ? res.status(201).json({ success: true, message: 'PaymentLogStripe deleted successfully', data: paymentLogStripe }) : res.status(404).json({ success: false, message: 'No paymentLogStripe found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete paymentLogStripe: ' + err.message }));
}