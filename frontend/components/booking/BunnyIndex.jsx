var React = require('react'),
  BunnyStore = require('../../stores/BunnyStore'),
  BunnyIndexItem = require('./BunnyIndexItem'),
  ClientActions = require('../../actions/ClientActions');

var BunnyIndex = React.createClass({
  componentDidMount: function () {
    this.bunnyListener = BunnyStore.addListener(this._bunnyChange);
    ClientActions.fetchAllBunnies();
  },
  componentWillUnmount: function () {
    this.bunnyListener.remove();
  },
  _bunnyChange: function () {
    this.bunnies = BunnyStore.all();
    this.forceUpdate();
  },
  render: function () {
    var bunnies;
    var self = this;

    if (this.bunnies) {
      bunnies = this.bunnies.map(function(bunny) {
        return <BunnyIndexItem
          nextStage={self.props.nextStage}
          updateBunny={self.props.updateBunny}
          key={bunny.id}
          bunnyName={bunny.user.name}/>
      })
    } else {
      bunnies = [];
    }

    return (
      <div>
        <p>{bunnies.length} Bunnies Available</p>
        {bunnies}
      </div>
    )
  }
});

module.exports = BunnyIndex;
