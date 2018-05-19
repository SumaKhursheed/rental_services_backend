'use strict';
module.exports = function(app) {
  var Product = require('../controllers/productController');

  app.route('/products')
    .get(Product.list_all_products)
    .post(Product.add_new_product);


  app.route('/products/:productId')
    .get(Product.read_a_product)
    .put(Product.update_a_product)
    .delete(Product.delete_a_product);
};
