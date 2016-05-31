var AppDispatcher = require('../dispatcher/Dispatcher'),
  UserConstants = require('../actions/UserConstants');

module.exports = {
  signup: function(credentials) {
    $.ajax({
      type: 'POST',
      url: 'api/user',
      data: {user:
        {
          email: credentials.email,
          password: credentials.password
        }
      },
      success: this.receiveCurrentUser,
      error: this.handleError
    });
  },

  login: function(credentials) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user:
        {
          email: credentials.email,
          password: credentials.password
        }
      },
      success: this.receiveCurrentUser,
      error: this.handleError
    });
  },

  logout: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: this.removeCurrentUser,
      error: this.handleError
    });
  },

  fetchCurrentUser: function() {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: this.receiveCurrentUser,
      error: this.handleError
    });
  },

  // Utilites for the above
  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },

  removeCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  }
};
