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

  logout = () => {
    localStorage.removeItem('TOKEN');
    alert("logout");

  }

  render() {
    const block = (localStorage.getItem('TOKEN')!== null) ? (
      <Dashboard name={this.state.data.name}/>
    ) : (
       <Form callbackFromParent={this.myCallback}/>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Testing Lambdas</h1>
          <button onClick={this.logout}>Logout</button>
        </header>
        <div className="App-data"></div>
        <div className="App-intro">
          {block}
        </div>
        <div>
        <h3>message: {this.state.data.message}</h3>
        </div>
      </div>
    );
  }
}

export default App;
