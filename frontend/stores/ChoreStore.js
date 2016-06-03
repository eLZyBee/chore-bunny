var AppDispatcher = require('../dispatcher/Dispatcher'),
  ChoreConstants = require('../constants/ChoreConstants'),
  Store = require('flux/utils').Store;

var ChoreStore = new Store(AppDispatcher);

var _chores = {};
var _errors;

ChoreStore.all = function () {
  return Object.keys(_chores).map(function(chore_id) {
    return _chores[chore_id];
  });
};

ChoreStore.find = function (id) {
  return _chores[id];
};

ChoreStore.updateChores = function (chores) {
  chores.forEach(function(chore) {
    _chores[chore.id] = chore;
  });
};

ChoreStore.deleteChore = function (id) {
  _chores[id] = null;
};

ChoreStore.setErrors = function (errors) {
  _errors = errors;
};

ChoreStore.errors = function () {
  if (_errors) {
    return _errors;
  }
};

ChoreStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ChoreConstants.RECEIVE_CHORES:
      ChoreStore.updateChores(payload.chores);
      break;
    case ChoreConstants.RECEIVE_CHORE:
      ChoreStore.updateChores([payload.chore]);
      break;
    case ChoreConstants.REMOVE_CHORE:
      ChoreStore.deleteChore(payload.chore.id);
      break;
    case ChoreConstants.ERROR:
      ChoreStore.setErrors(payload.errors);
      break;
  }
  ChoreStore.__emitChange();
};

module.exports = ChoreStore;
