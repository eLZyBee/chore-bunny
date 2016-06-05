var React = require('react'),
  RoomStore = require('../../stores/RoomStore'),
  ClientActions = require('../../actions/ClientActions'),
  RoomsIndexItem = require('./RoomsIndexItem');

var RoomsIndex = React.createClass({
  componentDidMount: function () {
    this.listener = RoomStore.addListener(this._roomChange);
    ClientActions.fetchAllRooms();
  },
  componentWillUnmount: function () {
    this.listener.remove();
  },
  _roomChange: function () {
    this.rooms = [];

    var roomsToShow = [2, 5, 4, 3, 7, 6];
    roomsToShow.forEach(function(room_id) {
      this.rooms.push(RoomStore.find(room_id));
    }.bind(this));

    this.forceUpdate();
  },
  render: function () {
    var rooms;

    if (this.rooms && this.rooms.length > 0) {
      rooms = this.rooms.map(function(room, i) {
        return (
          <RoomsIndexItem key={i} room={room}/>
        )
      }.bind(this))
    } else {
      rooms = [];
    }
    return (
      <div className='rooms-dash group'>
        {rooms}
      </div>
    );
  }
});

module.exports = RoomsIndex;
