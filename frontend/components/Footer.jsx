var React = require('react');

var Footer = React.createClass({
  render: function () {
    return(
      <div className="footer">
        <div className="footer-content group">
          <h3>More about me:</h3>
          <a href='https://www.linkedin.com/in/eliotbradshaw'>LinkedIn</a>
          <a href='https://github.com/eLZyBee'>GitHub</a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
