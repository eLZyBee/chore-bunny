var React = require('react'),
  RoomStore = require('../../stores/RoomStore'),
  ClientActions = require('../../actions/ClientActions'),
  RoomsIndexItem = require('./RoomsIndexItem');

var RoomsIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  bookForRoom: function (e) {
    e.preventDefault();
    this.context.router.push('/booking?' + e.target.value);
  },
  render: function () {
    var rooms;

    if (this.rooms && this.rooms.length > 0) {
      rooms = this.rooms.map(function(room, i) {
        return (
          <RoomsIndexItem key={i}
            room={room}
            bookForRoom={this.bookForRoom}/>
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
