var React = require('react');

var BookingIndexItem = React.createClass({
  render: function () {
    var booking = this.props.bookingDetails;
    var date = new Date(booking.date);

    return(
      <div className="booking-item group">
        <a href={(booking.bunny.id !== -1) ? ("#/bunny?" + booking.bunny.id) : '#/home'}><img src={booking.bunny.image_url}/></a>
        <ul className="booking-description">
          <li><h1>{booking.bunny.name}</h1></li>
          <li>CHORE:  <strong>{booking.chore.name}</strong></li>
          <li>BOOKING DAY & TIME:  <strong>{date.toLocaleDateString() + ' ' + date.toTimeString().slice(0, 5)}</strong></li>
        </ul>
        <ul className='booking-item-buttons'>
          <li>
            <button onClick={this.props.removeBooking} value={booking.id}>Cancel Booking</button>
          </li>
          <li>
            <button className='submit' onClick={this.props.markComplete} value={booking.id}>Mark Completed</button>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = BookingIndexItem;
