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
    this.context.router.push('/login');
  },
  render: function () {
    return (
      <div className="dashboard">
        <div className="header group">
          <nav>
            <img src={textUrl}/>
            <button onClick={this.signout}>Sign out</button>
          </nav>
        </div>
        <div className="main-dash">
          <h1>{'Welcome to ChoreBunny, ' + SessionStore.currentUser().name + '!'}</h1>
        </div>
      </div>
    )
  }
});

module.exports = Dashboard;
