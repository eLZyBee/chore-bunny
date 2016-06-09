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
    ClientActions.cancelBooking(e.target.value);
  },
  markComplete: function (e) {
    e.preventDefault();
    var booking = BookingStore.find(e.target.value);
    booking.completed = true;
    ClientActions.updateBooking(booking);
  },
  refresh: function () {
    ClientActions.fetchAllBookings();
  },

  render: function () {
    if (this.bookings) {
      bookings = this.bookings.map(function(booking, i) {
        if (booking.completed && !(booking.review)) {
          return <BookingIndexItem
            key={i}
            bookingDetails={booking}
            complete={true}
            refresh={this.refresh}/>
        } else if (booking.review) {
          return null;
        } else {
          return <BookingIndexItem
            key={i}
            bookingDetails={booking}
            removeBooking={this.removeBooking}
            refresh={this.refresh}
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
