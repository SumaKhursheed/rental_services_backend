'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  productname: {
    type: String,
    required: true
  },
  productdescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  imagePath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: { 
    type: String,
    ref: 'Category' 
  },
  payment_card: { 
    type: String,
    ref: 'Category' 
  },
  email: { 
    type: String,
    ref: 'Category' 
  }
});

module.exports = mongoose.model('Orders', OrderSchema);