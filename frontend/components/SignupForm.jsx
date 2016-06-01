var React = require('react'),
  UserActions = require('../actions/UserActions'),
  SessionStore = require('../stores/SessionStore');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return({
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    });
  },

  _loginChange: function () {
    if (SessionStore.currentUser()){
      this.context.router.push('home')
    }
  },

  componentDidMount: function () {
    SessionStore.addListener(this._loginChange);
  },

  updateFirstName: function (e) {
    this.setState({firstName: e.target.value});
  },

  updateLastName: function (e) {
    this.setState({lastName: e.target.value});
  },

  updateEmail: function (e) {
    this.setState({email: e.target.value});
  },

  updatePassword: function (e) {
    this.setState({password: e.target.value});
  },

  handleSignup: function (e) {
    e.preventDefault();
    var name = this.state.firstName + ' ' + this.state.lastName;
    UserActions.signup({
      name: name,
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSignup}>
        <label>First Name<br/>
          <input type='text' onChange={this.updateFirstName} value={this.state.firstName}/>
        </label><br/>
        <label>Last Name<br/>
          <input type='text' onChange={this.updateLastName} value={this.state.lastName}/>
        </label><br/>
        <label>Email Address<br/>
          <input type='text' onChange={this.updateEmail} value={this.state.email}/>
        </label><br/>
        <label>Password<br/>
          <input type='password'onChange={this.updatePassword} value={this.state.password}/>
        </label><br/>
        <input className="submit" type='submit' value='Sign up'/>
        <button onClick={this.props.goBack}>Back</button>
      </form>
    )
  }
});
