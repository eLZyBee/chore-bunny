var React = require('react'),
  ClientActions = require('../actions/ClientActions');

var Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  toDashboard: function () {
    this.context.router.push('/home');
  },
  toAccount: function () {
    this.context.router.push('/account');
  },
  signout: function () {
    ClientActions.logout();
    this.context.router.push('/login');
  },
  render: function () {
    return (
      <div className="header group">
        <nav>
          <a href='#/home'><img src={textUrl}/></a>
          <ul className="header-links group">
            <li>
              <button onClick={this.signout}>Sign out</button>
            </li>
            <li>
              <button onClick={this.toAccount}>Account</button>
            </li>
            <li>
              <button onClick={this.toDashboard}>Dashboard</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
});

module.exports = Header;
