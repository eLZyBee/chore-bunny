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
  render: function () {
    if (this.bookings) {
      bookings = this.bookings.map(function(booking, i) {
        if (booking.completed) {
          return null;
        } else {
          return <BookingIndexItem
            key={i}
            bookingDetails={booking}
            removeBooking={this.removeBooking}/>
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
