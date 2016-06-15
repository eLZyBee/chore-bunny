var SessionActions = require('./../actions/SessionActions'),
  ErrorActions = require('./../actions/ErrorActions');

var SessionApiUtil = {
	login: function (credentials) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: credentials},
			success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
			error: function (xhr) {
        var errors = xhr.responseJSON;
	      ErrorActions.setErrors("login", errors);
			}
		});
	},

	logout: function () {
		$.ajax({
			url: '/api/session',
			type: 'DELETE',
			success: function () {
        SessionActions.removeCurrentUser();
      },
			error: function () {
			}
		});
	},

	fetchCurrentUser: function (success) {
		$.ajax({
			url: '/api/session',
			type: 'GET',
			success: function (currentUser) {
			  SessionActions.receiveCurrentUser(currentUser);
        success && success();
			},
			error: function (xhr) {
			}
		});
	}
};


module.exports = SessionApiUtil;
