var React = require('react'),
  ClientActions = require('../../actions/ClientActions'),
  ChoreStore = require('../../stores/ChoreStore');

var BunnyChores = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  toBooking: function (e) {
    e.preventDefault();
    this.context.router.push('/booking?chor=' + e.target.value);
  },
  render: function () {
    var choresWithLinks;

    if (this.chores) {
      choresWithLinks = this.chores.map(function(chore, i) {
          return (
            <div className="group" key={i}>
              <h2>{chore.name}</h2>
              <button onClick={this.toBooking} value={chore.id} className="button">Select me for this Chore</button>
            </div>
          )
      }.bind(this))
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
