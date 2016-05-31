var React = require('react'),
  UserActions = require('../actions/UserActions'),
  CurrentUserState = require('../mixins/CurrentUserState');

var LoginForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return({
      form: 'choose',
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    });
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
  signupForm: function () {
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
        <input type='submit' value='Sign up'/>
        <button onClick={this.goBack}>Back</button>
      </form>
    )
  },
  loginForm: function () {
    return (
      <form onSubmit={this.handleLogin}>
        <label>Email Address<br/>
          <input type='text' onChange={this.updateEmail} value={this.state.email}/>
        </label><br/>
        <label>Password<br/>
          <input type='password'onChange={this.updatePassword} value={this.state.password}/>
        </label><br/>
          <input type='submit' value='Log in'/>
          <button onClick={this.goBack}>Back</button>
      </form>
    )
  },
  chooseLogin: function () {
    this.setState({form: 'login'});
  },
  chooseSignup: function () {
    this.setState({form: 'signup'});
  },
  goBack: function () {
    this.setState({form: 'choose'});
  },
  chooseForm: function () {
    return (
      <div>
        <button onClick={this.chooseLogin}>Log in</button>
        <button onClick={this.chooseSignup}>Sign up</button>
      </div>
    )
  },
  handleSignup: function (e) {
    e.preventDefault();
    var name = this.state.firstName + ' ' + this.state.lastName;
    UserActions.signup({
      name: name,
      email: this.state.email,
      password: this.state.password
    });
  },
  handleLogin: function (e) {
    e.preventDefault();
    UserActions.login({
      email: this.state.email,
      password: this.state.password
    });
  },
  guestLogin: function (e) {
    e.preventDefault();
    UserActions.guestLogin();
  },
  render: function () {
    var form = this.state.form;

    if (form === 'choose') {
      form = this.chooseForm();
    } else if (form === 'login') {
      form = this.loginForm();
    } else if (form === 'signup') {
      form = this.signupForm();
    }

    return (
      <div className='background'>
        <div className='auth-form'>
          <img src={logoUrl}/>
          {form}
          <p>Don't have or want an account? Log in as <strong onClick={this.guestLogin}>guest</strong></p>
        </div>
      </div>
    );

  }

});

module.exports = LoginForm;
