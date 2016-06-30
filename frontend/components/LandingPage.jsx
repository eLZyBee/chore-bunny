var React = require('react'),
  Slider = require('react-slick'),
  UserActions = require('../actions/UserActions');

var LandingPage = React.createClass({
  guestLogin: function (e) {
    UserActions.guestLogin();
  },
  render: function () {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      fade: true
    };
    return (
      <div className="landing">
        <Slider className="slick-container"{...settings}>
          <img src={carOne}/>
          <img src={carTwo}/>
          <img src={carThree}/>
          <img src={carFour}/>
          <img src={carFive}/>
          <img src={carSix}/>
        </Slider>
        <a href="#/login"><img className="logo" src={logoWhite}/></a>
        <div className="carousel-text">
          <h1>We'll find little tasks for your little rabbits</h1>
        </div>
        <a href="#/login">{"Log in  /  Sign up"}</a>
        <a href="#/login" onClick={this.guestLogin}>{"Explore as Guest"}</a>
      </div>
    );
  }
});

module.exports = LandingPage;
