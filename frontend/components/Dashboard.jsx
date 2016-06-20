var React = require('react'),
  ClientActions = require('../actions/ClientActions'),
  SessionStore = require('../stores/SessionStore'),
  BookingIndex = require('./booking/BookingIndex'),
  RoomsIndex = require('./rooms/RoomsIndex'),
  Footer = require('./Footer'),
  Header = require('./Header'),
  SearchBar = require('./SearchBar');

var Dashboard = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  toBooking: function (e) {
      this.context.router.push('/booking');
  },
  render: function () {
    var items = (this.chores) ? this.chores : [];

    return (
      <div className="dashboard">
        <Header/>
        <div className="main-dash">
          <div className="getting-started">
            <img src={SessionStore.currentUser().image_url}/>
            <h1 className="welcome">{"Welcome to ChoreBunny, " + SessionStore.currentUser().name + "!"}</h1>
            <SearchBar/>
            <button className="button" onClick={this.toBooking}>Make a Booking</button>
            <BookingIndex/>
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
                  <h3>Pick a Bunny</h3>
                  <p>Choose your most skilled Bunny to meet your request</p>
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
            <h2>Popular Rooms with Chores</h2>
          </div>
          <RoomsIndex/>
        </div>
        <Footer/>
      </div>
    )
  }
});

module.exports = Dashboard;
