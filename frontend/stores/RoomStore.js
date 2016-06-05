var AppDispatcher = require('../dispatcher/Dispatcher'),
  RoomConstants = require('../constants/RoomConstants'),
  Store = require('flux/utils').Store;

var RoomStore = new Store(AppDispatcher);

var _rooms = {};
var _errors;

RoomStore.all = function () {
  return Object.keys(_rooms).map(function(room_id) {
    return _rooms[room_id];
  });
};

RoomStore.find = function (id) {
  return _rooms[id];
};

RoomStore.updateRooms = function (rooms) {
  rooms.forEach(function(room) {
    _rooms[room.id] = room;
  });
};

RoomStore.deleteRoom = function (id) {
  _rooms[id] = null;
};

RoomStore.setErrors = function (errors) {
  _errors = errors;
};

RoomStore.errors = function () {
  if (_errors) {
    return _errors;
  }
};

RoomStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RoomConstants.RECEIVE_ROOMS:
      RoomStore.updateRooms(payload.rooms);
      RoomStore.__emitChange();
      break;
    case RoomConstants.RECEIVE_ROOM:
      RoomStore.updateRooms([payload.room]);
      RoomStore.__emitChange();
      break;
    case RoomConstants.REMOVE_ROOM:
      RoomStore.deleteRoom(payload.room.id);
      RoomStore.__emitChange();
      break;
    case RoomConstants.ERROR:
      RoomStore.setErrors(payload.errors);
      RoomStore.__emitChange();
      break;
  }
};

module.exports = RoomStore;
