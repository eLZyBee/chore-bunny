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
  createBooking: function(room) {
    $.ajax({
      type: 'POST',
      url: 'api/bookings',
      data: {room: room},
      success: this.receiveSingleBooking,
      error: this.handleError
    });
  },
  updateBooking: function(room) {
    $.ajax({
      type: 'PATCH',
      url: 'api/bookings/' + room.id,
      data: {room: {name: room.name}},
      success: this.receiveSingleBooking,
      error: this.handleError
    });
  },
  cancelBooking: function(room) {
    $.ajax({
      type: 'DELETE',
      url: 'api/bookings/' + room.id,
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
  receiveSingleBooking: function(room) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_BOOKING,
      room: room
    });
  },
  removeBooking: function(room) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.REMOVE_BOOKING,
      room: room
    });
  },
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
