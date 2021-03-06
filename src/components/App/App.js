import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
        <Router>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
        </Router>

      </div>
    );
  }

}

// const mapPropsToState= reduxState => {(
  // reduxState
// )}

export default connect()(App);
