var React = require('react'),
  BunnyStore = require('../../stores/BunnyStore');

var BunnyIndex = React.createClass({
  componentDidMount: function () {
    this.bunnyListener = BunnyStore.addListener(this._bunnyChange);
  },
  componentWillUnmount: function () {
    this.bunnyListener.remove();
  },
  _bunnyChange: function () {
    this.bunnies = BunnyStore.all();
    this.forceUpdate();
  },
  render: function () {
    return (
      <h1>I am an index of bunnies!</h1>
    )
  }
});

module.exports = BunnyIndex;
