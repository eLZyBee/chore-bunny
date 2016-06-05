var React = require('react');

var BunnyIndexItem = React.createClass({
  handleSubmit: function (e) {
    this.props.updateBunny(this.props.bunnyId);
    this.props.nextStage(e);
  },
  render: function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='bunny-media'>
          <input className='submit' type='submit' value='Select & Continue'/>
        </div>
        <div className='bunny-content'>
          <h1>{this.props.bunnyName}</h1>
        </div>
      </form>
    )
  }
});

module.exports = BunnyIndexItem;
