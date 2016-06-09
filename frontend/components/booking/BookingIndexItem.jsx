var React = require('react'),
  ReviewForm = require('./ReviewForm'),
  Modal = require('react-modal'),
  ModalStyle = require('../modal/ModalStyle');

var BookingIndexItem = React.createClass({
  getInitialState: function () {
    return ({modalOpen: false, modalChoice: null});
  },
  leaveReview: function (e) {
    e.preventDefault();

  },
  openModal: function (modal) {
    this.setState({modalOpen: true, modalChoice: modal});
  },
  closeModal: function () {
    this.setState({modalOpen: false});
  },
  handleConfirm: function (e) {
    if (this.state.modalChoice === 'cancel') {
      this.props.removeBooking(e);
    } else if (this.state.modalChoice === 'complete') {
      this.props.markComplete(e);
    }
    this.closeModal();
  },
  render: function () {
    var booking = this.props.bookingDetails;
    var date = new Date(booking.date);

    var message;
     if (this.state.modalChoice === 'cancel') {
       message = "Do you really want to cancel this booking?";
     } else if (this.state.modalChoice === 'complete') {
       message = "Is this booking completed?";
     } else {
       message = "LEAVE A REVIEW";
     }

    var buttons;
    if (this.props.complete) {
      buttons = (
        <ul className='booking-item-buttons'>
          <li>
            <button className='submit' onClick={this.openModal.bind(this, 'review')} value={booking.id}>Review Bunny</button>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className='booking-item-buttons'>
          <li>
            <button onClick={this.openModal.bind(this, 'cancel')} value={booking.id}>Cancel Booking</button>
          </li>
          <li>
            <button className='submit' onClick={this.openModal.bind(this, 'complete')} value={booking.id}>Mark Completed</button>
          </li>
        </ul>
      );
    }

    var modalElements;
    if (this.state.modalChoice === 'review') {
      modalElements = (
        <ReviewForm
          bookingId={booking.id}
          close={this.closeModal}
          message={message}
          refresh={this.props.refresh}/>
      );
    } else {
      modalElements = (
        <div className="confirmation">
          <h3>{message}</h3>
          <button onClick={this.handleConfirm} value={booking.id}>Yes</button>
          <button onClick={this.closeModal}>No</button>
        </div>
      );
    }

    return(
      <div className="booking-item group">
        <a href={(booking.bunny.id !== -1) ? ("#/bunny?" + booking.bunny.id) : '#/home'}><img src={booking.bunny.image_url}/></a>
        <ul className="booking-description">
          <li><h1>{booking.bunny.name}</h1></li>
          <li>CHORE:  <strong>{booking.chore.name}</strong></li>
          <li>BOOKING DAY & TIME:  <strong>{date.toLocaleDateString() + ' ' + date.toTimeString().slice(0, 5)}</strong></li>
        </ul>
        {buttons}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
            <button className="modal-close" onClick={this.closeModal}>X</button>
            {modalElements}
        </Modal>
      </div>
    );
  }
});

module.exports = BookingIndexItem;
