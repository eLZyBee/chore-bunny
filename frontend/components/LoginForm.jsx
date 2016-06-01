var React = require('react'),
  UserActions = require('../actions/UserActions'),
  SessionStore = require('../stores/SessionStore'),
  SignupForm = require('./SignupForm');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return({
      form: 'choose',
      email: '',
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

  updateEmail: function (e) {
    this.setState({email: e.target.value});
  },

  updatePassword: function (e) {
    this.setState({password: e.target.value});
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
      form = <SignupForm goBack={this.goBack}/>;
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
