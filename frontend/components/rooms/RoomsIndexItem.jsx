var React = require('react');

var RoomsIndexItem = React.createClass({
  render: function () {

    return (
      <div className='room-item' value={this.props.room.id}
        onClick={this.props.bookForRoom}>
        <img src={this.props.room.image_url}/>
        <h3>{this.props.room.name}</h3>
        <p>{this.props.room.description}</p>
      </div>
    );
  }
});

module.exports = RoomsIndexItem;
