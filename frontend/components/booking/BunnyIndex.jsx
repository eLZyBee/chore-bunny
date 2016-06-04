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
    
    if (this.bunnies) {
      bunnies = this.bunnies.map(function(bunny, i) {
        return <BunnyIndexItem
          nextStage={this.props.nextStage}
          updateBunny={this.props.updateBunny}
          bunnyId={bunny.id}
          key={i}
          bunnyName={bunny.user.name}/>
      }.bind(this));
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
