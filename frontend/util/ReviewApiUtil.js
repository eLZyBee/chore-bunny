var AppDispatcher = require('../dispatcher/Dispatcher'),
  ReviewConstants = require('../constants/ReviewConstants');

module.exports = {
  fetchBunnyReviews: function(bunny_id) {
    $.ajax({
      type: 'GET',
      url: 'api/bunnies/' + bunny_id + '/reviews',
      success: this.receiveBunnyReviews,
      error: this.handleError
    });
  },
  fetchSingleReview: function(id) {
    $.ajax({
      type: 'GET',
      url: 'api/reviews/' + id,
      success: this.receiveSingleReview,
      error: this.handleError
    });
  },
  createReview: function(review) {
    $.ajax({
      type: 'POST',
      url: 'api/reviews',
      data: {review: review},
      success: this.receiveSingleReview,
      error: this.handleError
    });
  },

  // Callback Util for above
  receiveBunnyReviews: function(reviews) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.RECEIVE_REVIEWS,
      reviews: reviews
    });
  },
  receiveSingleReview: function(review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.RECEIVE_REVIEW,
      review: review
    });
  },
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
