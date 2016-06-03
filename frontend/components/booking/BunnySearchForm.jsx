var React = require('react'),
  BunnyIndex = require('./BunnyIndex');

var BunnySearch = React.createClass({
  getInitialState: function () {
    return ({
      bunny_id: null,
      date: null,
      time: null
    })
  },
  updateForm: function () {
    this.props.updateForm({form: this.state})
  },
  updateDate: function (e) {
    this.updateForm();
    this.setState({date: e.target.value})
  },
  updateTime: function (e) {
    this.updateForm();
    this.setState({time: e.target.value})
  },
  render: function () {
    return (
      <form onSubmit={this.props.nextStage} className="booking-details">
        <h1> I am a bunny search form </h1>
        <label>CHORE DATE & TIME
          <input onChange={this.updateDate} type="date"/>
          <input onChange={this.updateTime} type="time"/>
        </label>
        <label>PICK A BUNNY
          <BunnyIndex/>
        </label>
        <input type="submit" value="Continue"/>
      </form>
    );
  }
});

module.exports = BunnySearch;
