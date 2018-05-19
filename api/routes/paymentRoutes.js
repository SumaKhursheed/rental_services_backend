'use strict';
module.exports = function(app) {
  var Payment = require('../controllers/paymentController');

  app.route('/payments')
    .get(Payment.list_all_payments)
    .post(Payment.add_new_payment);


  app.route('/meyments/:paymentId')
    .get(Payment.read_a_payment)
    .put(Payment.update_a_payment)
    .delete(Payment.delete_a_payment);
};
