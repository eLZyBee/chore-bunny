var React = require('react'),
  SessionStore = require('../../stores/SessionStore'),
  BookingDetailsForm = require('./BookingDetailsForm'),
  BunnySearchForm = require('./BunnySearchForm'),
  BookingConfirmationForm = require('./BookingConfirmationForm'),
  BookingStore = require('../../stores/BookingStore');

var Booking = React.createClass({
  getInitialState: function () {
    return({
      stage: 1,
      parent_id: SessionStore.currentUser().id,
      bunny_id: null,
      form: {
        details: null,
        date: null,
        time: null,
        room_id: null,
        chore_id: null
      }
    });
  },
  componentDidMount: function () {
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
  updateForm: function (obj) {
    this.setState({form: obj});
  },
  updateBunny: function (bunny) {
    this.setState({bunny: bunny});
  },
  createBooking: function () {
    debugger
    // create a booking!
  },
  render: function () {
    var stage;

    if (this.state.stage === 1) {
      stage = <BookingDetailsForm nextStage={this.nextStage} updateForm={this.updateForm}/>;
    } else if (this.state.stage === 2) {
      stage = <BunnySearchForm nextStage={this.nextStage} updateBunny={this.updateBunny}/>;
    } else {
      stage = <BookingConfirmationForm nextStage={this.nextStage}/>;
    }

    return (
      <div className="booking">
        <div className="header group">
          <nav>
            <a href='#/home'><img src={textUrl}/></a>
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
