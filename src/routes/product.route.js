const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", productController.createProduct);
router.get("/getAll", productController.getAllProducts);
router.get("/getById/:id", productController.getProductById);
router.put("/updateById/:id", productController.updateProductById);
router.delete("/deleteById/:id", productController.deleteProductById);

module.exports = router;



