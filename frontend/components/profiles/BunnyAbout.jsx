var React = require('react');

var BunnyAbout = React.createClass({
  render: function () {
    var bunny = this.props.bunny;
    
    return(
      <div className="profile-about">
        <h1>{"Hi, my name is " + bunny.user.name}</h1>
        <h3>You should hire me because:</h3>
        <p>{bunny.user.blurb}</p>
      </div>
    );
  }
});

module.exports = BunnyAbout;
