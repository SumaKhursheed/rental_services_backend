'use strict';
module.exports = function(app) {
  var Feedback = require('../controllers/feedbackController');

  app.route('/feedback')
    .get(Feedback.list_all_feedbacks)
    .post(Feedback.add_new_feedback);


  app.route('/feedback/:feedbackId')
    .get(Feedback.read_a_feedback)
    .put(Feedback.update_a_feedback)
    .delete(Feedback.delete_a_feedback);
};
