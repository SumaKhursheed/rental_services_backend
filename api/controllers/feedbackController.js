'use strict';


var mongoose = require('mongoose')

var Feedback = mongoose.model('Feedback');

exports.list_all_feedbacks = function(req, res) {
  Feedback.find({}, function(err, feedback) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successful",
      success: 1,
      feedback: feedback
    })
  });
};

exports.add_new_feedback = function(req, res) {
  var new_feedback = new Feedback(req.body);
  new_feedback.save(function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};


exports.read_a_feedback = function(req, res) {
  Feedback.findById(req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};


exports.update_a_feedback = function(req, res) {
  Feedback.findOneAndUpdate({_id: req.params.feedbackId}, req.body, {new: true}, function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};


exports.delete_a_feedback = function(req, res) {


  Feedback.remove({
    _id: req.params.feedbackId
  }, function(err, feedback) {
    if (err)
      res.send(err);
    res.json({ message: 'Feedback successfully deleted' });
  });
};