var AppDispatcher = require('../dispatcher/Dispatcher'),
  ReviewConstants = require('../constants/ReviewConstants'),
  Store = require('flux/utils').Store;

var ReviewStore = new Store(AppDispatcher);

var _reviews = {};
var _errors;

ReviewStore.all = function () {
  return Object.keys(_reviews).map(function(review_id) {
    return _reviews[review_id];
  });
};

ReviewStore.find = function (id) {
  return _reviews[id];
};

ReviewStore.updateReviews = function (reviews) {
  _reviews = {};
  reviews.forEach(function(review) {
    _reviews[review.id] = review;
  });
};

ReviewStore.setErrors = function (errors) {
  _errors = errors;
};

ReviewStore.errors = function () {
  if (_errors) {
    return _errors;
  }
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ReviewConstants.RECEIVE_REVIEWS:
      ReviewStore.updateReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.RECEIVE_REVIEW:
      ReviewStore.updateReviews([payload.review]);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.ERROR:
      ReviewStore.setErrors(payload.errors);
      ReviewStore.__emitChange();
      break;
  }

};

module.exports = ReviewStore;
