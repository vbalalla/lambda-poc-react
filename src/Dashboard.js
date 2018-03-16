import React, { Component } from 'react';
import './Dashboard.css';


class Dashboard extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            ag_id: '',
        }
    }

    handleLoginButton = (event) =>{
        alert(this.state.ag_id);
        fetch('https://2wyf9s1pma.execute-api.us-east-1.amazonaws.com/dev/agreement/'+this.state.ag_id,{
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            //   'Authorization': "Bearer " + localStorage.getItem('TOKEN')
            },
          }).then(result=>result.json())
        .then(data=> {
            if(data){
                // localStorage.setItem('TOKEN', data.token);
                alert(data);
                console.log(data)
            }
            else if(data.error){
                alert(data.error)
                console.log(data)
            }
            console.log(data.msg);
        });
        event.preventDefault();
    }

    handleag_idChange = (event) => {
        this.setState({ag_id: event.target.value});
    }


    render() {
        return <div className = "container">
            <h2>Hello {this.props.name}</h2>
            <form onSubmit={this.handleLoginButton}>
            <div className = "container">
                <label htmlFor="search"><b>Search</b></label>
                        <input type="text" name="search" onChange={this.handleag_idChange} value={this.state.password} placeholder="Search.."/>
                        </div>
                <input type="submit" value="Submit" />
            </form>

        </div>
        
      }
}


export default Dashboard;

