var BookingApiUtil = require('../util/BookingApiUtil'),
  BunnyApiUtil = require('../util/BunnyApiUtil'),
  ChoreApiUtil = require('../util/ChoreApiUtil'),
  RoomApiUtil = require('../util/RoomApiUtil'),
  ReviewApiUtil = require('../util/ReviewApiUtil'),
  UserApiUtil = require('../util/UserApiUtil');

module.exports = {

  // Users
  signup: function (credentials) {
    UserApiUtil.signup(credentials);
  },
  login: function (credentials) {
    UserApiUtil.login(credentials);
  },
  logout: function () {
    UserApiUtil.logout();
  },
  fetchCurrentUser: function () {
    UserApiUtil.fetchCurrentUser();
  },

  // Bookings
  fetchAllBookings: function () {
    BookingApiUtil.fetchAllBookings();
  },
  fetchSingleBooking: function (id) {
    BookingApiUtil.fetchSingleBooking(id);
  },
  createBooking: function (booking) {
    BookingApiUtil.createBooking(booking);
  },
  updateBooking: function (booking) {
    BookingApiUtil.updateBooking(booking);
  },
  cancelBooking: function (id) {
    BookingApiUtil.cancelBooking(id);
  },

  // Bunnies
  fetchAllBunnies: function () {
    BunnyApiUtil.fetchAllBunnies();
  },
  fetchSingleBunny: function (id) {
    BunnyApiUtil.fetchSingleBunny(id);
  },

  // Chores
  fetchAllChores: function () {
    ChoreApiUtil.fetchAllChores();
  },
  fetchSingleChore: function (id) {
    ChoreApiUtil.fetchSingleChore(id);
  },
  fetchRoomChores: function (room_id) {
    ChoreApiUtil.fetchRoomChores(room_id);
  },
  createChore: function (chore) {
    ChoreApiUtil.createChore(chore);
  },
  updateChore: function (chore) {
    ChoreApiUtil.updateChore(chore);
  },
  destroyChore: function (chore) {
    ChoreApiUtil.destroyChore(chore);
  },

  // Rooms
  fetchAllRooms: function () {
    RoomApiUtil.fetchAllRooms();
  },
  fetchSingleRoom: function (id) {
    RoomApiUtil.fetchSingleRoom(id);
  },
  createRoom: function (room) {
    RoomApiUtil.createRoom(room);
  },
  updateRoom: function (room) {
    RoomApiUtil.updateRoom(room);
  },
  destroyRoom: function (room) {
    RoomApiUtil.destroyRoom(room);
  },

  // Reviews
  fetchBunnyReviews: function (bunny_id) {
    ReviewApiUtil.fetchBunnyReviews(bunny_id);
  }


};
