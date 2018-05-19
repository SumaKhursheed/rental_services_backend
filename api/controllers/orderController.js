'use strict';


var mongoose = require('mongoose')

var Order = mongoose.model('Orders');

exports.list_all_orders = function(req, res) {
  Order.find({}, function(err, payment) {
    if (err)
      res.send(err);
       res.status(200).json({
      message: "Successful",
      success: 1,
      Order: payment
    })
  });
};

exports.add_new_order = function(req, res) {
  var new_order = new Order(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successfully Saved",
      success: 1,
      order: order
    })
  });
};


exports.read_an_order = function(req, res) {
  const email = req.params.email;
  Order.findOne({email: email}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};