var React = require('react');

var QuickAssign = React.createClass({
  handleSelect: function (e) {
    e.preventDefault();
    this.props.updateBunny(-1);
    this.props.nextStage(e);
  },
  render: function () {
    return (
      <div className="quick-assign group">
        <div className="media">
          <img src={quickUrl}/>
        </div>
        <div className="content">
          <h1>Quick Assign</h1>
          <h4>How Quick Assign will work:</h4>
          <p>We tell all your bunnies about the chore, a suitable bunny will accept.</p>
          <button onClick={this.handleSelect}>Select & Continue</button>
        </div>
      </div>
    );
  }
});

module.exports = QuickAssign;
