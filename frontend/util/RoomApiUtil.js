var AppDispatcher = require('../dispatcher/Dispatcher'),
  RoomConstants = require('../constants/RoomConstants');

module.exports = {
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
