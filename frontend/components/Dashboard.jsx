var React = require('react'),
  ClientActions = require('../actions/ClientActions'),
  SessionStore = require('../stores/SessionStore');

var Dashboard = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
  },
  toBooking: function () {
    this.context.router.push('/booking');
  },
  signout: function () {
    ClientActions.logout();
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
          <div className="getting-started">
            <img/>
            <h1>{'Welcome to ChoreBunny, ' + SessionStore.currentUser().name + '!'}</h1>
            <button className='button' onClick={this.toBooking}>Make a Booking</button>
            <h2>How to Get Started</h2>
            <p>Bunnies are eager for chores! Here's how it works:</p>
            <ul>
              <li>
                <div className='badge'>1</div>
                <div className='content'>
                  <h3>Pick a Chore</h3>
                  <p>Choose chores from a list of rooms in the house</p>
                </div>
              </li>
              <li>
                <div className='badge'>2</div>
                <div className='content'>
                  <h3>Get Bunny</h3>
                  <p>We'll get you a skilled Bunny to meet your request</p>
                </div>
              </li>
              <li>
                <div className='badge'>3</div>
                <div className='content'>
                  <h3>Get it Done</h3>
                  <p>Your Bunny rises to the challenge and earns BunnyPoints™</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Dashboard;
