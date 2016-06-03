var React = require('react'),
  SessionStore = require('../../stores/SessionStore'),
  BookingDetailsForm = require('./BookingDetailsForm'),
  BunnySearchForm = require('./BunnySearchForm'),
  BookingConfirmationForm = require('./BookingConfirmationForm'),
  ClientActions = require('../../actions/ClientActions'),
  BookingStore = require('../../stores/BookingStore');

var Booking = React.createClass({
  getInitialState: function () {
    return({
      stage: 1,
      details: null,
      date: null,
      room_id: null,
      chore_id: null,
      bunny_id: null,
      parent_id: SessionStore.currentUser().id
    });
  },
  componentDidMount: function () {
    ClientActions.fetchAllRooms();
    ClientActions.fetchAllChores();
    ClientActions.fetchAllBunnies();
    this.errorListener = BookingStore.addListener(this._onErrors);
  },
  componentWillUnmount: function () {
    this.errorListener.remove();
  },
  _onErrors: function () {
    // handle errors
  },
  nextStage: function () {
    if (this.state.stage === 1) {
      this.setState({ stage: 2 });
    } else if (this.state.stage === 2) {
      this.setState({ stage: 3 });
    } else {
      this.createBooking();
    }
  },
  createBooking: function () {
    // create a booking!
  },
  render: function () {
    var stage;

    if (this.state.stage === 1) {
      stage = <BookingDetailsForm
        nextStage={this.nextStage}
        detailsState={this.state.details}
        dateState={this.state.date}
        roomState={this.state.room_id}
        choreState={this.state.chore_id}/>;
    } else if (this.state.stage === 2) {
      stage = <BunnySearchForm
        nextStage={this.nextStage}
        bunnyState={this.state.bunny_id}/>;
    } else {
      stage = <BookingConfirmationForm
        nextStage={this.nextStage}
        dateState={this.state.date}
        choreState={this.state.chore_id}
        bunnyState={this.state.bunny_id}
        />;
    }

    return (
      <div className="booking">
        <div className="header group">
          <nav>
            <img src={textUrl}/>
            <button onClick={this.signout}>Sign out</button>
          </nav>
        </div>
        <ul className='stage-header'>
          <li><strong>1.</strong>Fill Out Chore Details</li>
          <li><strong>2.</strong>View & Pick from Bunnies</li>
          <li><strong>3.</strong>Confirm & Book</li>
        </ul>
        <div className="booking-form">
          {stage}
        </div>
      </div>
    )
  }
});

module.exports = Booking;
