var React = require('react'),
  ReactDOM = require('react-dom');

var Router = require('react-router').Router,
  Route = require('react-router').Route,
  IndexRoute = require('react-router').IndexRoute,
  hashHistory = require('react-router').hashHistory;

var LoginForm = require('./components/LoginForm'),
  Dashboard = require('./components/Dashboard');

var CurrentUserState = require('./mixins/CurrentUserState'),
  SessionStore = require('./stores/SessionStore'),
  SessionApiUtil = require('./util/SessionApiUtil');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function() {
    return (
      <div>
        <LoginForm/>
        {this.props.children}
      </div>
    );
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/login' component={LoginForm}/>
      <Route path='home' component={Dashboard} onEnter={ _ensureLoggedIn }/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(router, document.getElementById('root'));
})


function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {

  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {

      replace('/');
    }

    asyncDoneCallback();
  }
}
