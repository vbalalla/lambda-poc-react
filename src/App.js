import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Dashboard from './Dashboard';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:{
        error: '',
        message: '',
        name:'',
      }
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({data: dataFromChild});
    console.log(dataFromChild)
  };

  render() {
    const block = (this.state.data.token) ? (
      <Dashboard name={this.state.data.name}/>
    ) : (
       <Form callbackFromParent={this.myCallback}/>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Testing Lambdas</h1>
        </header>
        <div className="App-data"></div>
        <div className="App-intro">
          {block}
        </div>
        <div>
        <h3>message: {this.state.data.error}</h3>
        </div>
      </div>
    );
  }
}

export default App;
