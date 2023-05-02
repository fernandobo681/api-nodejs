const SaleSchema = require('../models/sale.model');

async function createSale (req, res) {
  const sale = await SaleSchema(req.body);
  sale
  .save()
  .then((sale) => res.status(201).json({ success: true, message: 'Sale created successfully', data: sale }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create sale: ' + err.message }));
}

async function getAllSales(req, res) {
  await SaleSchema
    .find()
    .then((sales) =>  {
      if(sales.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all sales successfully', data: sales })
      } else {
        res.status(404).json({ success: false, message: 'No sales found: ' + err.message });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No sales found: ' + err.message }));
}


async function getSaleById(req, res) {
  const { id } = req.params;
  await SaleSchema
    .findById(id)
    .then((sale) => { 
        res.status(200).json({ success: true, message: 'Get sale by id successfully', data: sale })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No sale found:' + err.message }));
}

async function updateSaleById(req, res) {
  const { id } = req.params;
  const { appointment_id, customer, unit_id, payment, total_cost } = req.body;
  await SaleSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { appointment_id, customer, unit_id, payment, total_cost }
    })
    .then((saleUpdated) => {
      if (saleUpdated) {
        SaleSchema
          .findById(id)
          .then((sale) => res.status(201).json({ success: true, message: 'sale updated successfully', data: sale }))
          .catch((err) => res.status(404).json({ success: false, message: 'No sale found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No sale found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update sale: ' + err.message }));
}

async function deleteSaleById(req, res) {
  const { id } = req.params;
  await SaleSchema
    .findOneAndDelete({ _id: id })
    .then((sale) => {
      sale ? res.status(201).json({ success: true, message: 'Sale deleted successfully', data: sale }) : res.status(404).json({ success: false, message: 'No sale found: ' + err.message });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete sale: ' + err.message }));
}

module.exports = {
    getAllSales,
    createSale,
    getSaleById,
    updateSaleById,
    deleteSaleById
};