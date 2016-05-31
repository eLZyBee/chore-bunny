var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser = {},
    _currentUserHasBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
}

function _setErrors(errors) {
  _currentUserHasBeenFetched = false;
  _currentUser = {};
}

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case "LOGOUT":
    	_logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function () {
	return _currentUser;
};

SessionStore.errors = function () {
  return _errors;
};


SessionStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

module.exports = SessionStore;
