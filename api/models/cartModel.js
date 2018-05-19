'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({
    
  price: {
    type: Number,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  total_price: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cart', CartSchema);