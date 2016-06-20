var React = require('react'),
  ChoreStore = require('../stores/ChoreStore');

var SearchBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return ({ searchString: "" });
  },
  _searchChange: function (e) {
    this.setState({searchString: e.target.value});
  },
  componentDidMount: function () {
    this.choreListener = ChoreStore.addListener(this._choreChange);
    ClientActions.fetchAllChores();
    document.addEventListener("click", this.checkNode);
    this.open = false;
  },
  componentWillUnmount: function () {
    this.choreListener.remove();
  },
  _choreChange: function () {
    this.chores = ChoreStore.all();
    this.forceUpdate();
  },
  checkNode: function (e) {
    if (this.node.contains(e.target)) {
      this.open = true;
    } else {
      this.open = false;
    }
    this.forceUpdate();
  },
  getNode: function (node) {
    this.node = node;
  },
  activeNode: function (e) {
    this.open = true;
  },
  render: function() {
    var items = items || [];
    var searchString = this.state.searchString.trim().toLowerCase();

    if (this.chores && searchString.length > 2 && this.open) {
      var chores = this.chores.filter(function(chore) {
        return chore.name.toLowerCase().match(searchString);
      })
      items = chores.map(function(chore, i) {
        return <li className="search-item" key={i}>{chore.name}</li>;
      })
    }

    return (
      <div className="search-bar" ref={this.getNode}>
        <input className="search-input"
          type="text"
          placeholder="Search for a chore"
          onChange={this._searchChange}
          onFocus={this.activeNode}/>
        <ul className="search-results">
          {items}
        </ul>
      </div>
    );
  }
});

module.exports = SearchBar;
