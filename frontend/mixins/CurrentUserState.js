var UserStore = require('../stores/UserStore'),
  UserActions = require('../actions/UserActions');

module.exports = {
  getInitialState: function () {
    return({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  },

  componentDidMount: function () {
    UserStore.addListener(this.amendUser);
    if (typeof UserStore.currentUser() === 'undefined') {
      UserActions.fetchCurrentUser();
    }
  },

  updateUser: function () {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  }
} ;
