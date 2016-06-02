var AppDispatcher = require('../dispatcher/Dispatcher'),
  RoomConstants = require('../constants/RoomConstants');

module.exports = {
  fetchAllRooms: function() {
    $.ajax({
      type: 'GET',
      url: 'api/rooms',
      success: this.receiveAllRooms,
      error: this.handleError
    });
  },
  fetchSingleRoom: function(id) {
    $.ajax({
      type: 'GET',
      url: 'api/rooms/' + id,
      success: this.receiveSingleRoom,
      error: this.handleError
    });
  },
  createRoom: function(room) {
    $.ajax({
      type: 'POST',
      url: 'api/rooms',
      data: {room: room},
      success: this.receiveSingleRoom,
      error: this.handleError
    });
  },
  updateRoom: function(room) {
    $.ajax({
      type: 'PATCH',
      url: 'api/rooms/' + room.id,
      data: {room: {name: room.name, description: room.description}},
      success: this.receiveSingleRoom,
      error: this.handleError
    });
  },
  destroyRoom: function(room) {
    $.ajax({
      type: 'DELETE',
      url: 'api/rooms/' + room.id,
      success: this.removeRoom,
      error: this.handleError
    });
  },

  // Callback Util for above
  receiveAllRooms: function(rooms) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.RECEIVE_ROOMS,
      rooms: rooms
    });
  },
  receiveSingleRoom: function(room) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.RECEIVE_ROOM,
      room: room
    });
  },
  removeRoom: function(room) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.REMOVE_ROOM,
      room: room
    });
  },
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
