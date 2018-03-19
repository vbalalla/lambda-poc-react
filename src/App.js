import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Dashboard from './Dashboard';
import ReduxComponent from './ReduxComponent';

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
    window.location.reload();

  }

  render() {
    const block = (localStorage.getItem('TOKEN')!== null) ? (
      <Dashboard name={this.state.data.name}/>
    ) : (
       <Form callbackFromParent={this.myCallback}/>
    );

    const logoutbutton = (localStorage.getItem('TOKEN')!== null) ? (
      <button onClick={this.logout}>Logout</button>
    ) : (
       <div></div>
    );


    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Testing Lambdas</h1>
          {logoutbutton}
        </header>
        <div className="App-data"></div>
        <div className="App-intro">
          {block}
          {/* <ReduxComponent/> */}
        </div>
        <div>
        <h3>{this.state.data.message}</h3>
        </div>
      </div>
    );
  }
}

export default App;
