import ProductSchema from '../models/product.model';

export async function createProduct (req, res) {
  const product = await new ProductSchema(req.body);
  product
  .save()
  .then((product) => res.status(201).json({ success: true, message: 'Product created successfully', data: product }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create product: ' + err.message }));
}

export async function getAllProducts(req, res) {
  await ProductSchema
    .find()
    .then((products) =>  {
      if(products.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all products successfully', data: products })
      } else {
        res.status(404).json({ success: false, message: 'No products found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No products found: ' + err.message }));
}


export async function getProductById(req, res) {
  const { id } = req.params;
  await ProductSchema
    .findById(id)
    .then((product) => { 
        res.status(200).json({ success: true, message: 'Get product by id successfully', data: product })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No product found:' + err.message }));
}

export async function updateProductById(req, res) {
  const { id } = req.params;
  const { name, description, points, expiration_date } = req.body;
  await ProductSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, description, points, expiration_date }
    })
    .then((productUpdated) => {
      if (productUpdated) {
        ProductSchema
          .findById(id)
          .then((product) => res.status(201).json({ success: true, message: 'product updated successfully', data: product }))
          .catch((err) => res.status(404).json({ success: false, message: 'No product found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No product found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update product: ' + err.message }));
}

export async function deleteProductById(req, res) {
  const { id } = req.params;
  await ProductSchema
    .findOneAndDelete({ _id: id })
    .then((product) => {
      product ? res.status(201).json({ success: true, message: 'Product deleted successfully', data: product }) : res.status(404).json({ success: false, message: 'No product found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete product: ' + err.message }));
}
