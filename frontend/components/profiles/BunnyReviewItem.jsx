var React = require('react');

var BunnyReviewItem = React.createClass({
  render: function () {
    var review = this.props.review;
    return (
      <div className="profile-review-item group">
        <div className="pri-media">
          <img src={review.image_url}/>
          <img src={(review.positive) ? thumbUp : thumbDown}/>
        </div>
        <div className="pri-content">
          <h3>{review.author}</h3>
          <p>{review.body}</p>
        </div>
      </div>
    );
  }
});

module.exports = BunnyReviewItem;
