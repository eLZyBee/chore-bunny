var React = require('react'),
  ClientActions = require('../../actions/ClientActions');

var ReviewForm = React.createClass({
  getInitialState: function () {
    return ({review: '', positive: "Good"});
  },
  updateReview: function (e) {
    this.setState({review: e.target.value})
  },
  leaveReview: function (e) {
    e.preventDefault();
    ClientActions.createReview({
      body: this.state.review,
      positive: (this.state.positive === 'Good') ? true : false,
      booking_id: this.props.bookingId
    });
    this.props.close();
    this.props.refresh();
  },
  changePositive: function (e) {
    e.preventDefault();
    if (this.state.positive === "Good") {
      $(e.target).removeClass("good")
      $(e.target).addClass("bad")
      this.setState({positive: "Bad"})
    } else {
      $(e.target).removeClass("bad")
      $(e.target).addClass("good")
      this.setState({positive: "Good"})
    }
  },

  render: function () {
    return (
      <div className="review-form">
        <h3>{this.props.message}</h3>
        <textarea onChange={this.updateReview} rows="10" cols="50" value={this.state.review}></textarea>
        <button className="good" onClick={this.changePositive}>{this.state.positive}</button>
        <button className="submit" onClick={this.leaveReview}>Submit Review</button>
      </div>
    );
  }
});

module.exports = ReviewForm;
