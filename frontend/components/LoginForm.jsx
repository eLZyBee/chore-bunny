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
    <form onSubmit={this.handleSignup}>
      <label>First Name
        <input type='text' onChange={this.updateFirstName} value={this.state.firstName}/>
      </label>
      <label>Last Name
        <input type='text' onChange={this.updateLastName} value={this.state.lastName}/>
      </label>
      <label>Email Address
        <input type='text' onChange={this.updateEmail} value={this.state.email}/>
      </label>
      <label>Password
        <input type='password'onChange={this.updatePassword} value={this.state.password}/>
      </label>
        <input type='submit' value='Sign up'/>
    </form>
  },

  loginForm: function () {
    return (
      <form onSubmit={this.handleLogin}>
        <label>Email Address
          <input type='text' onChange={this.updateEmail} value={this.state.email}/>
        </label>
        <label>Password
          <input type='password'onChange={this.updatePassword} value={this.state.password}/>
        </label>
          <input type='submit' value='Log in'/>
      </form>
    )
  },

  chooseForm: function () {
    return (
      <div>
        <button onClick={this.chooseLogin}>Log in</button>
        <button onClick={this.chooseSignup}>Sign up</button>
      </div>
    )
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
          {form}
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
