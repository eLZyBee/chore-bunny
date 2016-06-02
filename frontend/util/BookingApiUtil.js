var AppDispatcher = require('../dispatcher/Dispatcher'),
  BookingConstants = require('../constants/BookingConstants');

module.exports = {
  fetchAllBookings: function() {
    $.ajax({
      type: 'GET',
      url: 'api/bookings',
      success: this.receiveAllBookings,
      error: this.handleError
    });
  },
  fetchSingleBooking: function(id) {
    $.ajax({
      type: 'GET',
      url: 'api/bookings/' + id,
      success: this.receiveSingleBooking,
      error: this.handleError
    });
  },
  createBooking: function(booking) {
    $.ajax({
      type: 'POST',
      url: 'api/bookings',
      data: {booking: booking},
      success: this.receiveSingleBooking,
      error: this.handleError
    });
  },
  updateBooking: function(booking) {
    $.ajax({
      type: 'PATCH',
      url: 'api/bookings/' + booking.id,
      data: {booking: {
        details: booking.details,
        bunny_id: booking.bunny_id,
        parent_id: booking.parent_id,
        chore_id: booking.chore_id,
        room_id: booking.room_id,
        date: booking.date,
        completed: booking.completed
      }},
      success: this.receiveSingleBooking,
      error: this.handleError
    });
  },
  cancelBooking: function(booking) {
    $.ajax({
      type: 'DELETE',
      url: 'api/bookings/' + booking.id,
      success: this.removeBooking,
      error: this.handleError
    });
  },

  // Callback Util for above
  receiveAllBookings: function(bookings) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_BOOKINGS,
      bookings: bookings
    });
  },
  receiveSingleBooking: function(booking) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_BOOKING,
      booking: booking
    });
  },
  removeBooking: function(booking) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.REMOVE_BOOKING,
      booking: booking
    });
  },
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
