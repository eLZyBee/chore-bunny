var React = require('react');

var BookingDetailsForm = React.createClass({
  // getInitialState: function () {
  //   return ({
  //     details: null,
  //     date: null,
  //     room_id: null,
  //     chore_id: null
  //   })
  // },
  render: function () {
    return (
      <form onSubmit={this.props.nextStage} className="booking-details">
        <h1> I am a booking details form </h1>
        <label>DESCRIBE YOUR CHORE
          <textarea rows='10' cols='50'>{this.props.detailsState}</textarea>
        </label>
        <label>CHOOSE A DATE
          <input type="date"/>
        </label>
        <label>CHOOSE CHORE LOCATION
          <input/>
        </label>
        <label>CHOOSE CHORE
          <input/>
        </label>
        <input type="submit" value="Continue"/>
      </form>
    );
  }
});

module.exports = BookingDetailsForm;
