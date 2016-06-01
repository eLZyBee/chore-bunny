var React = require('react'),
  UserActions = require('../actions/UserActions'),
  SessionStore = require('../stores/SessionStore');

var Dashboard = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
  },
  signout: function () {
    UserActions.logout();
    this.context.router.push('/');
  },
  render: function () {
    return (
      <div className="dashboard">
        <h1>{'Welcome ' + SessionStore.currentUser().name}</h1>
        <button onClick={this.signout}>Sign out</button>
      </div>
    )
  }
});

module.exports = Dashboard;
