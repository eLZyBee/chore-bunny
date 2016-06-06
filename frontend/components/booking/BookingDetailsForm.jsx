var React = require('react'),
  RoomStore = require('../../stores/RoomStore'),
  ChoreStore = require('../../stores/ChoreStore'),
  ClientActions = require('../../actions/ClientActions');

var BookingDetailsForm = React.createClass({
  getInitialState: function () {
    return ({
      details: null,
      room_id: null,
      chore_id: null
    })
  },
  componentDidMount: function () {
    if (this.props.searchRoom.length >= 1) {
      this.setState({room_id: this.props.searchRoom});
    }
    this.roomListener = RoomStore.addListener(this._roomChange);
    this.choreListener = ChoreStore.addListener(this._choreChange);
    ClientActions.fetchAllRooms();
    ClientActions.fetchAllChores();
  },
  componentWillUnmount: function () {
    this.roomListener.remove();
    this.choreListener.remove();
  },
  _roomChange: function () {
    this.rooms = RoomStore.all();
    if (this.chores) {
      this.forceUpdate();
    }
  },
  _choreChange: function () {
    this.chores = ChoreStore.all();
    if (this.rooms) {
      this.forceUpdate();
    }
  },
  updateForm: function () {
    this.props.updateForm(this.state);
  },
  updateDetails: function (e) {
    this.setState({details: e.target.value});
    this.updateForm();
  },
  updateRoom: function (e) {
    this.setState({room_id: e.target.value});
    ClientActions.fetchRoomChores(e.target.value);
    this.updateForm();
  },
  updateChore: function (e) {
    this.setState({chore_id: e.target.value});
    this.updateForm();
  },

  render: function () {
    var roomOptions;
    var choreOptions;

    if (this.rooms === undefined) {
      roomOptions = null;
    } else {
      roomOptions = this.rooms.map(function(room, i) {
        return <option key={i} value={room.id}>{room.name}</option>;
      })
    }

    if (this.chores === undefined) {
      choreOptions = null;
    } else {
      choreOptions = this.chores.map(function(chore, i) {
        return <option key={i} value={chore.id}>{chore.name}</option>;
      })
    }

    return (
      <form onSubmit={this.props.nextStage} className="booking-details">
        <h1>Your Chore Details</h1>
        <div className='booking-section'>
          <label>CHOOSE CHORE LOCATION
            <select value={(this.state.room_id) ? this.state.room_id : ''} onChange={this.updateRoom}>
              <option/>
              {roomOptions}
            </select>
          </label>
          <label>CHOOSE CHORE
            <select onChange={this.updateChore}>
              <option/>
              {choreOptions}
            </select>
          </label>
        </div>
        <div className='booking-section nudge-down'>
          <label>DESCRIBE YOUR CHORE
            <textarea onChange={this.updateDetails} rows='10' cols='50'>{this.state.details}</textarea>
          </label>
          <input className='submit' type="submit" value="Save"/>
        </div>
      </form>
    );
  }
});

module.exports = BookingDetailsForm;
