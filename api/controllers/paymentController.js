'use strict';


var mongoose = require('mongoose')

var Payment = mongoose.model('Payments');

exports.list_all_payments = function(req, res) {
  Payment.find({}, function(err, payment) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successful",
      success: 1,
      payment: payment
    })
  });
};

exports.add_new_payment = function(req, res) {
  var new_payment = new Payment(req.body);
  new_payment.save(function(err, payment) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successfully Added",
      success: 1,
      payment: payment
    })
  });
};


exports.read_a_payment = function(req, res) {
  Payment.findById(req.params.paymentId, function(err, payment) {
    if (err)
      res.send(err);
    res.json(payment);
  });
};


exports.update_a_payment = function(req, res) {
  Payment.findOneAndUpdate({_id: req.params.paymentId}, req.body, {new: true}, function(err, payment) {
    if (err)
      res.send(err);
    res.json(payment);
  });
};


exports.delete_a_payment = function(req, res) {


  Payment.remove({
    _id: req.params.paymentId
  }, function(err, payment) {
    if (err)
      res.send(err);
    res.json({ message: 'Payment successfully deleted' });
  });
};