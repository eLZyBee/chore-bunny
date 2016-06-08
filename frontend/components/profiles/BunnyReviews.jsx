var React = require('react'),
  ReviewStore = require('../../stores/ReviewStore'),
  ClientActions = require('../../actions/ClientActions'),
  BunnyReviewItem = require('./BunnyReviewItem');

var BunnyReviews = React.createClass({
  componentDidMount: function () {
    this.reviewListener = ReviewStore.addListener(this._reviewChange);
    ClientActions.fetchBunnyReviews(this.props.bunny.id);
  },
  componentWillUnmount: function () {
    this.reviewListener.remove();
  },
  _reviewChange: function () {
    this.reviews = ReviewStore.all();
    this.forceUpdate();
  },
  render: function () {
    var reviews;

    if (this.reviews) {
      reviews = this.reviews.map(function(review, i) {
        return <BunnyReviewItem review={review} key={i}/>
      })
    } else {
      reviews = [];
    }

    return(
      <div className="profile-reviews">
        {reviews}
      </div>
    );
  }
});

module.exports = BunnyReviews;
