import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Demo</h1>
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
