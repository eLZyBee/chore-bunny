var AppDispatcher = require('../dispatcher/Dispatcher'),
  BunnyConstants = require('../constants/BunnyConstants'),
  Store = require('flux/utils').Store;

var BunnyStore = new Store(AppDispatcher);

var _bunnies = {};
var _errors;

BunnyStore.all = function () {
  return Object.keys(_bunnies).map(function(bunny_id) {
    return _bunnies[bunny_id];
  });
};

BunnyStore.find = function (id) {
  return _bunnies[id];
};

BunnyStore.updateBunnies = function (bunnies) {
  bunnies.forEach(function(bunny) {
    _bunnies[bunny.id] = bunny;
  });
};

BunnyStore.setErrors = function (errors) {
  _errors = errors;
};

BunnyStore.errors = function () {
  if (_errors) {
    return _errors;
  }
};

BunnyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BunnyConstants.RECEIVE_BUNNIES:
      BunnyStore.updateBunnies(payload.bunnies);
      BunnyStore.__emitChange();
      break;
    case BunnyConstants.RECEIVE_BUNNY:
      BunnyStore.updateBunnies([payload.bunny]);
      BunnyStore.__emitChange();
      break;
      case BunnyConstants.ERROR:
      BunnyStore.setErrors(payload.errors);
      BunnyStore.__emitChange();
      break;
  }
};

module.exports = BunnyStore;
