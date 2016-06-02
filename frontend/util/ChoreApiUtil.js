var AppDispatcher = require('../dispatcher/Dispatcher'),
  ChoreConstants = require('../constants/ChoreConstants');

module.exports = {
  fetchAllChores: function() {
    $.ajax({
      type: 'GET',
      url: 'api/chores',
      success: this.receiveAllChores,
      error: this.handleError
    });
  },
  fetchSingleChore: function(id) {
    $.ajax({
      type: 'GET',
      url: 'api/chores/' + id,
      success: this.receiveSingleChore,
      error: this.handleError
    });
  },
  createChore: function(chore) {
    $.ajax({
      type: 'POST',
      url: 'api/chores',
      data: {chore: chore},
      success: this.receiveSingleChore,
      error: this.handleError
    });
  },
  updateChore: function(chore) {
    $.ajax({
      type: 'PATCH',
      url: 'api/chores/' + chore.id,
      data: {chore: {name: chore.name}},
      success: this.receiveSingleChore,
      error: this.handleError
    });
  },
  destroyChore: function(chore) {
    $.ajax({
      type: 'DELETE',
      url: 'api/chores/' + chore.id,
      success: this.removeChore,
      error: this.handleError
    });
  },

  // Callback Util for above
  receiveAllChores: function(chores) {
    AppDispatcher.dispatch({
      actionType: ChoreConstants.RECEIVE_CHORES,
      chores: chores
    });
  },
  receiveSingleChore: function(chore) {
    AppDispatcher.dispatch({
      actionType: ChoreConstants.RECEIVE_CHORE,
      chore: chore
    });
  },
  removeChore: function(chore) {
    AppDispatcher.dispatch({
      actionType: ChoreConstants.REMOVE_CHORE,
      chore: chore
    });
  },
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: ChoreConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
