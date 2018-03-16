import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:{
        error: '',
        token: ''
      }
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({data: dataFromChild});
    console.log(dataFromChild)
  };

  render() {
    const block = (this.state.data.token !== '') ? (
      <h1>logged in</h1>
    ) : (
       <Form callbackFromParent={this.myCallback}/>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Testing Lambdas</h1>
        </header>
        <p className="App-intro">
          {block}
        </p>
      </div>
    );
  }
}

export default App;
