import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="app-container">
        <div className="quote">
          <div id="quote-line"></div>
          <h2>Quote will go here</h2>
        </div>
      </div>
    )
  }
}

export default App;
