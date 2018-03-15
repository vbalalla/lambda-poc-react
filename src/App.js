import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Testing Lambdas</h1>
        </header>
        <p className="App-intro">
          <Form/>
        </p>
      </div>
    );
  }
}

export default App;
