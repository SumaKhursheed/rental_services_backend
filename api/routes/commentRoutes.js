'use strict';
module.exports = function(app) {
  var Comment = require('../controllers/commentController');

  app.route('/comments')
    .get(Comment.list_all_comments)
    .post(Comment.add_new_comment);


  app.route('/comments/:commentId')
    .get(Comment.read_a_comment)
    .put(Comment.update_a_comment)
    .delete(Comment.delete_a_comment);
};
