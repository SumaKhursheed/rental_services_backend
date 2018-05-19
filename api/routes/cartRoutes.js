'use strict';
module.exports = function(app) {
  var Cart = require('../controllers/cartController');

 app.route('/cart')
    .get(Cart.list_all_cart)
    .post(Cart.add_new_cart);


  app.route('/cart/:cartId')
    .get(Cart.view_a_cart)
    .put(Cart.update_product_quantity)

  app.route('/cart/add/:cartId')
    .post(Cart.add_new_product)
};