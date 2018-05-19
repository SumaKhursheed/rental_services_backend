'use strict';
module.exports = function(app) {
  var Category = require('../controllers/categoryController');

  app.route('/categories')
    .get(Category.list_all_categories)
    .post(Category.add_new_category);


  app.route('/categories/:categoryId')
    .get(Category.read_a_category)
    .put(Category.update_a_category)
    .delete(Category.delete_a_category);
};