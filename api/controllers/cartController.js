'use strict';

var mongoose = require('mongoose');
var Cart = require('../models/cartModel');
var Product = mongoose.model('Products');

exports.list_all_cart = function(req, res) {
  Cart.find({}, function(err, cart) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successful",
      success: 1,
      cart: cart
    })
  });
};

exports.add_new_cart = function(req, res) {
  var productId = req.body.productId
  var cart = new Cart(req.body);
  console.log(productId)
  Product.findById(productId, function (err, product) {
    if (err)
      res.send(err);
      
      cart.save(function(err, product) {
    
        if (err)
        res.send(err);
        res.json({ message: 'product successfully added into cart' });
     });
  });
};

exports.add_new_product = function(req, res) {
  var cartId = req.params.cartId
  var product = new Cart(req.body);

  Cart.findById(cartId, function (err, cart) {
    if (err)
      res.send(err);
      

      cart.save(function(err, cart) {
    
        if (err)
        res.send(err);
        res.json({ message: 'product successfully added into cart' });
     });
  });
};

exports.view_a_cart = function(req, res) {
  Cart.findById(req.params.cartId, function(err, cart) {
    if (err)
      res.send(err);
    console.log(cart)
    res.json(cart);
  });
};


exports.update_product_quantity = function(req, res) {
  Cart.findOneAndUpdate({_id: req.params.cartId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};