var React = require('react'),
  SessionStore = require('../../stores/SessionStore'),
  BookingDetailsForm = require('./BookingDetailsForm'),
  BunnySearchForm = require('./BunnySearchForm'),
  BookingConfirmationForm = require('./BookingConfirmationForm'),
  BookingStore = require('../../stores/BookingStore'),
  ClientActions = require('../../actions/ClientActions');

function parseDate(date, time) {
  var datetime = date.date + ' ' + time.time;
  return new Date(datetime);
}
// new Date(year, month[, day[, hour
// [, minutes[, seconds[, milliseconds]]]]]);

var Booking = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return({
      stage: 1,
      parent_id: SessionStore.currentUser().id,
      bunny_id: null,
      date: null,
      time: null,
      form: {
        details: null,
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
    event.preventDefault();
    if (this.state.stage === 1) {
      this.setState({ stage: 2 });
      $('#1').removeClass('stage-active');
      $('#1').addClass('stage-complete');
      $('#2').addClass('stage-active');
    } else if (this.state.stage === 2) {
      this.setState({ stage: 3 });
      $('#2').removeClass('stage-active');
      $('#2').addClass('stage-complete');
      $('#3').addClass('stage-active');
    } else {

      this.createBooking();
    }
  },
  updateForm: function (obj) {
    this.setState({form: obj});
  },
  updateBunny: function (bunny) {
    this.setState({bunny_id: bunny});
  },
  updateDate: function (date) {
    this.setState({date: date});
  },
  updateTime: function (time) {
    this.setState({time: time});
  },
  createBooking: function () {
    debugger
    // create a booking!
    ClientActions.createBooking(
      {
        bunny_id: this.state.bunny_id,
        parent_id: this.state.parent_id,
        details: this.state.form.details,
        chore_id: this.state.form.chore_id,
        date: parseDate(this.state.date, this.state.time),
        room_id: this.state.form.room_id
      }
    )

    this.context.router.push('/home')
  },
  signout: function () {
    ClientActions.logout();
    this.context.router.push('/login');
  },
  render: function () {
    var stage;

    if (this.state.stage === 1) {
      stage = <BookingDetailsForm nextStage={this.nextStage} updateForm={this.updateForm}/>;
    } else if (this.state.stage === 2) {
      stage = <BunnySearchForm
        nextStage={this.nextStage}
        updateBunny={this.updateBunny}
        updateDate={this.updateDate}
        updateTime={this.updateTime}/>;
    } else {
      stage = <BookingConfirmationForm
        finalDetails={this.state}
        nextStage={this.nextStage}/>;
    }

    return (
      <div className="booking">
        <div className="header group">
          <nav>
            <a href='#/home'><img src={textUrl}/></a>
            <button onClick={this.signout}>Sign out</button>
          </nav>
        </div>
        <nav className='stage-header'>
          <ul className='stage-items group'>
            <li id='1'className='stage-active'><strong>1.</strong> Fill Out Chore Details</li>
            <li id='2'><strong>2.</strong> View & Pick from Bunnies</li>
            <li id='3'><strong>3.</strong> Confirm & Book</li>
          </ul>
        </nav>
        <div className="booking-form">
          {stage}
        </div>
      </div>
    )
  }
});

module.exports = Booking;
