'use strict';


var mongoose = require('mongoose')

var Category = mongoose.model('Category');

exports.list_all_categories = function(req, res) {
  Category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.status(200).json({
      message: "Successful",
      success: 1,
      category: category
    })
  });
};

exports.add_new_category = function(req, res) {
  var new_category = new Category(req.body);
  new_category.save(function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.read_a_category = function(req, res) {
  Product.findById(req.params.categoryId, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.update_a_category = function(req, res) {
  Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.delete_a_category = function(req, res) {


  Category.remove({
    _id: req.params.categoryId
  }, function(err, category) {
    if (err)
      res.send(err);
    res.json({ message: 'Category successfully deleted' });
  });
};