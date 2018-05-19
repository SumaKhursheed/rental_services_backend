'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FeedbackSchema = new Schema({
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);