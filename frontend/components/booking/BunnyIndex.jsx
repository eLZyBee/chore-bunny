var React = require('react'),
  BunnyStore = require('../../stores/BunnyStore'),
  BunnyIndexItem = require('./BunnyIndexItem'),
  QuickAssign = require('./QuickAssign'),
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
        if (bunny.id !== -1) {
          return (<div key={i} className='bunny group'>
              <BunnyIndexItem
              nextStage={this.props.nextStage}
              updateBunny={this.props.updateBunny}
              bunny={bunny}/>
          </div>)
        }
      }.bind(this));
    } else {
      bunnies = [];
    }

    return (
      <div>
        <QuickAssign
          updateBunny={this.props.updateBunny}
          nextStage={this.props.nextStage}/>
        <div className="bunny-show">{bunnies.length -1} Bunnies Available</div>
        <div className='bunny-list'>
          {bunnies}
        </div>
      </div>
    )
  }
});

module.exports = BunnyIndex;
