var React = require('react'),
  Slider = require('react-slick');

var LandingPage = React.createClass({
  render: function () {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false
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
        <img className="logo" src={logoWhite}/>
        <a href="/login">Log in</a>
      </div>
    );
  }
});

module.exports = LandingPage;
