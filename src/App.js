import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Demo</h1>
        <hr />
        <Form />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
