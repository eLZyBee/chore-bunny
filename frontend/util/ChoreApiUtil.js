var AppDispatcher = require('../dispatcher/Dispatcher'),
  ChoreConstants = require('../constants/ChoreConstants');

module.exports = {
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
