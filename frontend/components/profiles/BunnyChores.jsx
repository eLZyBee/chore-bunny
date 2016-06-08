var React = require('react'),
  ClientActions = require('../../actions/ClientActions'),
  ChoreStore = require('../../stores/ChoreStore');

var BunnyChores = React.createClass({
  componentDidMount: function () {
    this.choreListener = ChoreStore.addListener(this._choreChange);
    ClientActions.fetchAllChores();
  },
  componentWillUnmount: function () {
    this.choreListener.remove();
  },
  _choreChange: function () {
    this.chores = ChoreStore.all();
    this.forceUpdate();
  },
  render: function () {
    var choresWithLinks;

    if (this.chores) {
      choresWithLinks = this.chores.map(function(chore, i) {
          return (
            <div className="group" key={i}>
              <h2>{chore.name}</h2>
              <button className="button">Select me for this Chore</button>
            </div>
          )
      })
    } else {
      choresWithLinks = [];
    }

    return(
      <div className="profile-chores">
        {choresWithLinks}
      </div>
    );
  }
});

module.exports = BunnyChores;
