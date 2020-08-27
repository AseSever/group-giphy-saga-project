import React, { Component } from 'react';
import './App.css';
import Favorites from '../Search/Search'
class App extends Component {

  render() {
    return (
      <div className="App">
         <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
        <Favorites />
      </div>
    );
  }
  
}

export default App;
