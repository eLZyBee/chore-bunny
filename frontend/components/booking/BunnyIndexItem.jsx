var React = require('react');

var BunnyIndexItem = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.updateBunny(this.props.bunny.id);
    this.props.nextStage(e);
  },
  render: function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='bunny-media'>
          <img src={this.props.bunny.user.image_url}/>
          <input className='submit' type='submit' value='Select & Continue'/>
        </div>
        <div className='bunny-content'>
          <h1>{this.props.bunny.user.name}</h1>
          <p>{this.props.bunny.user.blurb}</p>
        </div>
      </form>
    )
  }
});

module.exports = BunnyIndexItem;
