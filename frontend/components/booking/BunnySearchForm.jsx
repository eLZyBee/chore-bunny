var React = require('react'),
  BunnyIndex = require('./BunnyIndex');

var BunnySearch = React.createClass({
  componentDidMount: function () {
  },
  // updateBunny: function (e) {
  //   this.props.updateBunny({bunny: e.target.value});
  // },
  updateDate: function (e) {
    this.props.updateDate({date: e.target.value});
  },
  updateTime: function (e) {
    this.props.updateTime({time: e.target.value});
  },
  render: function () {
    return (
      <div className="booking-details">
        <h1> I am a bunny search form </h1>
        <div className="datetime">
          <label>CHORE DATE & TIME
            <input onChange={this.updateDate} type="date"/>
            <input onChange={this.updateTime} type="time"/>
          </label>
        </div>
        <div className='booking-section'>
          <div className="bunnies">
            <label>PICK A BUNNY
              <BunnyIndex
                nextStage={this.props.nextStage}
                updateBunny={this.props.updateBunny}/>
            </label>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BunnySearch;
