var UserApiUtil = require('../util/UserApiUtil');

module.exports = {
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  signup: function(user) {
    UserApiUtil.signup({
      name: user.name,
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
    UserApiUtil.login({
      email: 'guest@test.com',
      password: 'password'
    });
  },

  logout: function() {
    UserApiUtil.logout();
  }
};
