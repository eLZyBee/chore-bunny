var React = require('react'),
  ReactDOM = require('react-dom');

var Router = require('react-router').Router,
  Route = require('react-router').Route,
  IndexRoute = require('react-router').IndexRoute,
  hashHistory = require('react-router').hashHistory;

var CurrentUserState = require('./mixins/CurrentUserState');

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
    <Route path='/' component={App}/>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(router, document.getElementById('root'));
})
