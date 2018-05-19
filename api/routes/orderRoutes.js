'use strict';
module.exports = function(app) {
  var Order = require('../controllers/orderController');

  app.route('/orders')
    .get(Order.list_all_orders)
    .post(Order.add_new_order);


  app.route('/orders/:orderId')
    .get(Order.read_an_order);
};
