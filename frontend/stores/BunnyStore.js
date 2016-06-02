var AppDispatcher = require('../dispatcher/Dispatcher'),
  BunnyConstants = require('../constants/BunnyConstants'),
  Store = require('flux/utils').Store;

var BunnyStore = new Store(AppDispatcher);

var _bunnies = {};
var _errors;

BunnyStore.all = function () {
  return _bunnies;
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
      break;
    case BunnyConstants.RECEIVE_BUNNY:
      BunnyStore.updateBunnies([payload.bunny]);
      break;
    case BunnyConstants.ERROR:
      BunnyStore.setErrors(payload.errors);
      break;
  }
  BunnyStore.__emitChange();
};

module.exports = BunnyStore;
