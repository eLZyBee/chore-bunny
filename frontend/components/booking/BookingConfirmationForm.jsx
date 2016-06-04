var React = require('react'),
  ChoreStore = require('../../stores/ChoreStore'),
  RoomStore = require('../../stores/RoomStore'),
  BunnyStore = require('../../stores/BunnyStore'),
  ClientActions = require('../../actions/ClientActions');

var BookingConfirmationForm = React.createClass({
  componentDidMount: function () {
    this.choreListener = ChoreStore.addListener(this._choreChange);
    this.roomListener = RoomStore.addListener(this._roomChange);
    this.bunnyListener = BunnyStore.addListener(this._bunnyChange);
    ClientActions.fetchSingleChore(this.props.finalDetails.form.chore_id);
    ClientActions.fetchSingleRoom(this.props.finalDetails.form.room_id);
    ClientActions.fetchSingleBunny(this.props.finalDetails.bunny_id);
  },
  componentWillUnmount: function () {
    this.choreListener.remove();
    this.roomListener.remove();
    this.bunnyListener.remove();
  },
  _choreChange: function () {
    this.chore = ChoreStore.find(this.props.finalDetails.form.chore_id);
    (this.chore && this.room && this.bunny) ? this.forceUpdate() : null;
  },
  _roomChange: function () {
    this.room = RoomStore.find(this.props.finalDetails.form.room_id);
    (this.chore && this.room && this.bunny) ? this.forceUpdate() : null;

  },
  _bunnyChange: function () {
    this.bunny = BunnyStore.find(this.props.finalDetails.bunny_id);
    (this.chore && this.room && this.bunny) ? this.forceUpdate() : null;

  },
  render: function () {
    if (this.chore && this.room && this.bunny) {
      return (
        <form onSubmit={this.props.nextStage} className="booking-details">
          <div className='booking-section'>
            <h1> Are these details correct? </h1>
            <p>CHORE <br/><strong>{this.chore.name}</strong></p>
            <p>ROOM <br/><strong>{this.room.name}</strong></p>
            <p>BUNNY <br/><strong>{this.bunny.user.name}</strong></p>
            <p>DETAILS <br/><strong>{this.props.finalDetails.form.details}</strong></p>
            <input className='submit' type="submit" value="Confirm & Book"/>
          </div>
        </form>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
});

module.exports = BookingConfirmationForm;
