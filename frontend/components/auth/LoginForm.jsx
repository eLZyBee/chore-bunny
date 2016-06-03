var React = require('react'),
  UserActions = require('../../actions/UserActions'),
  SessionStore = require('../../stores/SessionStore');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return({
      email: '',
      password: ''
    });
  },

  updateEmail: function (e) {
    this.setState({email: e.target.value});
  },

  updatePassword: function (e) {
    this.setState({password: e.target.value});
  },

  handleLogin: function (e) {
    e.preventDefault();
    UserActions.login({
      email: this.state.email,
      password: this.state.password
    });
    // this.setState({
    //   email: '',
    //   password: ''
    // });
  },

  render: function () {
    return (
      <form onSubmit={this.handleLogin}>
        <label>Email Address<br/>
        <input type='text' onChange={this.updateEmail} value={this.state.email}/>
        </label><br/>
        <label>Password<br/>
        <input type='password'onChange={this.updatePassword} value={this.state.password}/>
        </label><br/>
        <input className="submit" type='submit' value='Log in'/>
        <button onClick={this.props.goBack}>Back</button>
      </form>
    )
  }

});

module.exports = LoginForm;
