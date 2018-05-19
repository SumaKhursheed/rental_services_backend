'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PaymentSchema = new Schema({
  name: {
    type: String,
  },
  card: {
    type: Number,
    required: true
  },
  valid: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  email: {
    type: String,
  },
  productname: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payments', PaymentSchema);