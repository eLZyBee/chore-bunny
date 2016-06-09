var React = require('react'),
  BunnyChores = require('./BunnyChores'),
  BunnyReviews = require('./BunnyReviews'),
  BunnyStore = require('../../stores/BunnyStore'),
  Header = require('../Header'),
  BunnyAbout = require('./BunnyAbout');

var BunnyProfile = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return ({tab: 'Chores', bunny: null})
  },
  componentDidMount: function () {
    this.bunnyListener = BunnyStore.addListener(this._bunnyChange);
    ClientActions.fetchSingleBunny(this.props.location.search.slice(1));
  },
  componentWillUnmount: function () {
    this.bunnyListener.remove();
  },
  selectTab: function (e) {
    e.preventDefault();
    $("li").removeClass("tab-selected");
    $(e.target).addClass("tab-selected");
    this.setState({tab: e.target.innerHTML});
  },
  _bunnyChange: function () {
    var bunny = BunnyStore.find(this.props.location.search.slice(1));
    this.setState({bunny: bunny});
  },
  signout: function () {
    ClientActions.logout();
    this.context.router.push('/login');
  },
  render: function () {
    var activeTab;
    var header;

    if (this.state.tab === 'Chores') {
      activeTab = <BunnyChores/>;
    } else if (this.state.tab === 'Reviews') {
      activeTab = <BunnyReviews bunny={this.state.bunny}/>;
    } else if (this.state.tab === 'About') {
      activeTab = <BunnyAbout bunny={this.state.bunny}/>;
    }

    if (this.state.bunny) {
      header = (
        <div className="profile-header group">
          <img src={this.state.bunny.user.image_url}/>
          <h2>{"Hello, I'm " + this.state.bunny.user.name}</h2>
        </div>
      )
    } else {
      header = <p>loading...</p>
    }

    return (
      <div className="bunny-profile">
        <Header/>
        {header}
        <div className="profile-tab-bar">
          <div className="profile-tabs group">
            <ul className="group">
              <div className="tab-container">
                <li className="tab-selected" onClick={this.selectTab}>Chores</li>
              </div>
              <div className="tab-container">
                <li onClick={this.selectTab}>Reviews</li>
              </div>
              <div className="tab-container">
                <li onClick={this.selectTab}>About</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="profile-content-container">
          <div className="profile-content">
            {activeTab}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BunnyProfile;
