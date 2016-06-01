var SessionConstants = require('../constants/SessionConstants'),
  AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: currentUser
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }

};
