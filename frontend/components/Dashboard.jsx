var React = require('react'),
  ClientActions = require('../actions/ClientActions'),
  SessionStore = require('../stores/SessionStore'),
  ChoreStore = require('../stores/ChoreStore'),
  BookingIndex = require('./booking/BookingIndex'),
  RoomsIndex = require('./rooms/RoomsIndex'),
  Footer = require('./Footer'),
  Header = require('./Header'),
  Search = require('react-search');

var Dashboard = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    this.choreListener = ChoreStore.addListener(this._choreChange);
    ClientActions.fetchAllChores();
  },
  componentWillUnmount: function () {
    this.choreListener.remove();
  },
  _choreChange: function () {
    this.chores = ChoreStore.all();
    this.forceUpdate();
  },
  toBooking: function () {
    // if (chore_id) {
    //   this.context.router.push('/booking?chore=' + chore_id);
    // } else {
      this.context.router.push('/booking');
    // }
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
            <Search
              placeholder="Search for a chore"
              className="dash-search"
              onClick={this.toBooking}
              items={items}
              keys={['name']}
              searchKey={'name'}
              />
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
