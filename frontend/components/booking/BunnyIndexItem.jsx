var React = require('react');

var BunnyIndexItem = React.createClass({
  handleSubmit: function (e) {
    this.props.updateBunny(this.props.bunnyId);
    this.props.nextStage(e);
  },
  render: function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>I am {this.props.bunnyName}</h2>
        <input className='submit' type='submit' value='Select & Continue'/>
      </form>
    )
  }
});

module.exports = BunnyIndexItem;
