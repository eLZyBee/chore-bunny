var React = require('react'),
  Modal = require('react-modal'),
  ModalStyle = require('../modal/ModalStyle'),
  BunnyReviews = require('../profiles/BunnyReviews');

var BunnyIndexItem = React.createClass({
  getInitialState: function () {
    return ({modalOpen: false});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.updateBunny(this.props.bunny.id);
    this.props.nextStage(e);
  },
  openModal: function () {
    this.setState({modalOpen: true});
  },
  closeModal: function () {
    this.setState({modalOpen: false});
  },
  render: function () {
    var bunny = this.props.bunny;

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="bunny-media">
          <img src={bunny.user.image_url}/>
          <input className="submit" type="submit" value="Select & Continue"/>
          <a onClick={this.openModal}>Profile</a>
        </div>
        <div className="bunny-content">
          <h1>{bunny.user.name}</h1>
          <h4>How I can help:</h4>
          <p>{bunny.user.blurb}</p>
        </div>
        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <div className="reviews-modal">
            <button className="modal-close" onClick={this.closeModal}>X</button>
            <BunnyReviews bunny={bunny}/>
            <a href={"#/bunny?" + bunny.id}>Full Profile</a>
          </div>
        </Modal>
      </form>
    )
  }
});

module.exports = BunnyIndexItem;
