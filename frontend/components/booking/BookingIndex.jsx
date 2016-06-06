var React = require('react'),
  BookingStore = require('../../stores/BookingStore'),
  ClientActions = require('../../actions/ClientActions'),
  BookingIndexItem = require('./BookingIndexItem');

var BookingIndex = React.createClass({
  componentDidMount: function () {
    this.bookingListener = BookingStore.addListener(this._bookingChange);
    ClientActions.fetchAllBookings();
  },
  componentWillUnmount: function () {
    this.bookingListener.remove();
  },
  _bookingChange: function() {
    this.bookings = BookingStore.all();
    this.forceUpdate();
  },
  removeBooking: function (e) {
    e.preventDefault();
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      ClientActions.cancelBooking(e.target.value);
    }
  },
  markComplete: function (e) {
    e.preventDefault();
    var booking = BookingStore.find(e.target.value);
    if (window.confirm('Is this booking really completed?')) {
      booking.completed = true;
      ClientActions.updateBooking(booking);
    }
  },
  render: function () {
    if (this.bookings) {
      bookings = this.bookings.map(function(booking, i) {
        if (booking.completed) {
          return null;
        } else {
          return <BookingIndexItem
            key={i}
            bookingDetails={booking}
            removeBooking={this.removeBooking}
            markComplete={this.markComplete}/>
        };
      }.bind(this));

      return (
        <div>
          {bookings}
        </div>
      );
    } else {
      return(
        null
      );
    }
  }
});

module.exports = BookingIndex;
