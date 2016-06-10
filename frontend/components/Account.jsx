var React = require('react'),
  Header = require('./Header'),
  ClientActions = require('../actions/ClientActions'),
  SessionStore = require('../stores/SessionStore');

var Account = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return ({imageUrl: "", imageFile: null})
  },
  preview: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },
  updatePhoto: function (e) {
    e.preventDefault();
    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append("id", SessionStore.currentUser().id);
    formData.append("user[image]", file);

    ClientActions.updateUser(formData);
    this.context.router.push('/home')
  },
  render: function () {
    return (
      <div className="account-page">
        <Header/>
        <div className="account-content">
          <h1>Your Account</h1>
          <div className="account-content-form">
            <h2>CHANGE YOUR PHOTO</h2>
            <form onSubmit={this.updatePhoto}>
              <input type="file" onChange={this.preview}/><br/>
              <img
                src={
                  (this.state.imageUrl) ?
                  this.state.imageUrl :
                  SessionStore.currentUser().image_url
                }
                height="200"/>
              <input type="submit" value="Save Photo"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Account;
