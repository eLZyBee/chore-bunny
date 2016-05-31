var UserApiUtil = require('../util/UserApiUtil');

module.exports = {
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  signup: function(user) {
    UserApiUtil.signup({
      email: user.email,
      password: user.password
    });
  },

  login: function(user) {
    UserApiUtil.login({
      email: user.email,
      password: user.password
    });
  },

  guestLogin: function() {
    UserActions.login({
      email: 'guest@test.com',
      password: 'password'
    });
  },

  logout: function() {
    UserApiUtil.logout();
  }
};
