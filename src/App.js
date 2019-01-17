import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/Form';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React Demo</h1>
          <hr />
          <Form />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
