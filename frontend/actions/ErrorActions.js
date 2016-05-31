var AppDispatcher = require('../dispatcher/Dispatcher'),
  ErrorConstants = require('../constants/ErrorConstants');

module.exports = {
  setErrors: function (form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors: function () {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};
