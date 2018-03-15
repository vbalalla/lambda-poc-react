import React, { Component } from 'react';

class Form extends React.Component{

    // componentDidMount() {
	// 	client({method: 'GET', path: `http://jsonplaceholder.typicode.com/posts`}).done(response => {
	// 		this.setState({items: response.entity._embedded.items});
	// 	});
    // }

    constructor(prop){
        super(prop)
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }
    
    // componentDidMount() {
    //     fetch(`http://jsonplaceholder.typicode.com/posts`)
    //     .then(result=>result.json())
    //     .then(items=>this.setState({"items":items}));
    // }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    
    handleLoginButton = (event) => {
        fetch(`https://6vxnx0m4a8.execute-api.us-east-1.amazonaws.com/dev/data/`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            }),
          }).then(result=>result.json())
        .then(data=>this.setState({"message":data.msg}));
        console.log(this.state.msg)
        event.preventDefault();
    }
    
    render(){
        // if(!this.state.items) return <div> Loading...... </div>
        // return <div> {this.state.items[0].userId} </div>
        return <div className = "container">
            <form onSubmit={this.handleLoginButton}>
                <div className= "container">
                <label for="uname"><b>Username</b></label>
                <input type="text" name="uname" value={this.state.username} onChange={this.handleUsernameChange}></input> <br></br>
                <label for="pass"><b>Password</b></label>
                <input type="text" name="pass" value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <h2>{this.state.message}</h2>
        </div>
    }
}

export default Form;