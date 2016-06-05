var AppDispatcher = require('../dispatcher/Dispatcher'),
  UserConstants = require('../constants/UserConstants'),
  Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors;

UserStore.login = function (user) {
  _currentUser = user;
  _errors = null;
};

UserStore.logout = function () {
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function () {
  if (_currentUser) {
    return _currentUser;
  }
};

UserStore.setErrors = function (errors) {
  _errors = errors;
};

UserStore.errors = function () {
  if (_errors) {
    return [].slice.call(_errors);
  }
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN:
      UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT:
      UserStore.logout();
      UserStore.__emitChange();
      break;
    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
