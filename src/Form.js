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
            message: '',
            token: '',
            error:''
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
        fetch(`https://2wyf9s1pma.execute-api.us-east-1.amazonaws.com/dev/login`,{
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
        .then(data=> {
            if(data.token){
                this.setState({"token":data.token});
                this.setState({"message":data.message});
                this.props.callbackFromParent(data);
            }
            else if(data.error){
                this.setState({"error":data.error});
                this.setState({"message":data.error})
                this.props.callbackFromParent(data);
            }
            // this.setState({"message":data.msg})
            // this.props.callbackFromParent(data.msg);
            console.log(data.msg);
        });
        event.preventDefault();
    }
    
    render(){
        // if(!this.state.items) return <div> Loading...... </div>
        // return <div> {this.state.items[0].userId} </div>
        return <div className = "container">
            <form onSubmit={this.handleLoginButton}>
                <div className= "container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" name="uname" value={this.state.username} onChange={this.handleUsernameChange}></input> <br></br>
                <label htmlFor="pass"><b>Password</b></label>
                <input type="text" name="pass" value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}

export default Form;