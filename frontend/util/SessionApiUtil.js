var SessionActions = require('./../actions/SessionActions'),
  ErrorActions = require('./../actions/ErrorActions');

var SessionApiUtil = {
	login: function (credentials) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: credentials},
			success: function (currentUser) {
        console.log("Login success (SessionApiUtil#login)");
        SessionActions.receiveCurrentUser(currentUser);
      },
			error: function (xhr) {
			  console.log("Login error in SessionApiUtil#login");
        var errors = xhr.responseJSON;
	      ErrorActions.setErrors("login", errors);
			}
		});
	},

	logout: function () {
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: function () {
        console.log("Logout success (SessionApiUtil#logout)");
        SessionActions.removeCurrentUser();
      },
			error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
		});
	},

	fetchCurrentUser: function (success) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success: function (currentUser) {
			  SessionActions.receiveCurrentUser(currentUser);
        success && success();
			},
			error: function (xhr) {
			  console.log("Error in SessionApiUtil#fetchCurrentUser");
			}
		});
	}
};


module.exports = SessionApiUtil;
