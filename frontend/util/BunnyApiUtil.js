var AppDispatcher = require('../dispatcher/Dispatcher'),
  BunnyConstants = require('../constants/BunnyConstants');

module.exports = {
  fetchAllBunnies: function() {
    $.ajax({
      type: 'GET',
      url: 'api/bunnies',
      success: this.receiveAllBunnies,
      error: this.handleError
    });
  },

  fetchSingleBunny: function(id) {
    $.ajax({
      type: 'GET',
      url: 'api/bunnies/' + id,
      success: this.receiveSingleBunny,
      error: this.handleError
    });
  },

  // Callback Utils for above

  receiveAllBunnies: function(bunnies) {
    AppDispatcher.dispatch({
      actionType: BunnyConstants.RECEIVE_BUNNIES,
      bunnies: bunnies
    });
  },

  receiveSingleBunny: function(bunny) {
    AppDispatcher.dispatch({
      actionType: BunnyConstants.RECEIVE_BUNNY,
      bunny: bunny
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
