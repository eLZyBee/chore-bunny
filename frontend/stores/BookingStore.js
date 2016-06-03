var AppDispatcher = require('../dispatcher/Dispatcher'),
  BookingConstants = require('../constants/BookingConstants'),
  Store = require('flux/utils').Store;

var BookingStore = new Store(AppDispatcher);

var _bookings = {};
var _errors;

BookingStore.all = function () {
  return Object.keys(_bookings).map(function(booking_id) {
    return _bookings[booking_id];
  });
};

BookingStore.find = function (id) {
  return _bookings[id];
};

BookingStore.updateBookings = function (bookings) {
  bookings.forEach(function(booking) {
    _bookings[booking.id] = booking;
  });
};

BookingStore.deleteBooking = function (id) {
  _bookings[id] = null;
};

BookingStore.setErrors = function (errors) {
  _errors = errors;
};

BookingStore.errors = function () {
  if (_errors) {
    return _errors;
  }
};

BookingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BookingConstants.RECEIVE_BOOKINGS:
      BookingStore.updateBookings(payload.bookings);
      break;
    case BookingConstants.RECEIVE_BOOKING:
      BookingStore.updateBookings([payload.booking]);
      break;
    case BookingConstants.REMOVE_BOOKING:
      BookingStore.deleteBooking(payload.booking.id);
      break;
    case BookingConstants.ERROR:
      BookingStore.setErrors(payload.errors);
      break;
  }
  BookingStore.__emitChange();
};

module.exports = BookingStore;
