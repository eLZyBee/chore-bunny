var React = require('react'),
  BunnyIndex = require('./BunnyIndex');

var BunnySearch = React.createClass({
  componentDidMount: function () {
  },
  updateDate: function (e) {
    this.props.updateDate({date: e.target.value});
  },
  updateTime: function (e) {
    this.props.updateTime({time: e.target.value});
  },
  render: function () {
    return (
      <div className="booking-details group">
        <h1>Pick a bunny</h1>
        <div className="container-datetime">
          <div className="datetime">
            <label>CHORE DATE & TIME
              <input onChange={this.updateDate} type="date"/>
              <input onChange={this.updateTime} type="time"/>
            </label>
          </div>
        </div>
        <div className='booking-section'>
          <div className="bunnies">
            <BunnyIndex
              nextStage={this.props.nextStage}
              updateBunny={this.props.updateBunny}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BunnySearch;
