const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", saleController.createSale);
router.get("/getAll", saleController.getAllSales);
router.get("/getById/:id", saleController.getSaleById);
router.put("/updateById/:id", saleController.updateSaleById);
router.delete("/deleteById/:id", saleController.deleteSaleById);

module.exports = router;



