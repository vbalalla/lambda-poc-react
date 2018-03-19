import React, { Component } from 'react';
import './Dashboard.css';
import Table from './Table';


class Dashboard extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            ag_id: '',
            data: ["sdssd"]
        }
    }

    handleSearchButton = (event) =>{
        alert(this.state.ag_id);
        fetch('https://5y8qkv9u9e.execute-api.us-east-1.amazonaws.com/dev/agreement/'+this.state.ag_id,{
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + localStorage.getItem('TOKEN')
            },
          }).then(result=>result.json())
        .then(data=> {
            if(data){
                // localStorage.setItem('TOKEN', data.token);
                // alert(data);
                console.log(data)
                this.setState({'data':data});
            }
            else if(data.error){
                // alert(data.error)
                console.log(data.error)
                
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
            <form onSubmit={this.handleSearchButton}>
            <div className = "container">
                <label htmlFor="search"><b>Search</b></label>
                        <input type="text" name="search" onChange={this.handleag_idChange} value={this.state.ag_id} placeholder="Search.."/>
                        </div>
                <input type="submit" value="Submit" />
            </form>
            {/* <Table data = {this.data}/> */}
            <div className = "tbl">
                <table>
                    <tbody>
                        <tr>
                            <td>Agreement</td>
                            <td>{this.state.data.Agreement}</td>
                        </tr>
                        <tr>
                            <td>Agreement type</td>
                            <td>{this.state.data["Agreement type"]}</td>
                        </tr>
                        <tr>
                            <td>Application type</td>
                            <td>{this.state.data["Application type"]}</td>
                        </tr>
                        <tr>
                            <td>Performance type</td>
                            <td>{this.state.data["Performance type"]}</td>
                        </tr>
                        <tr>
                            <td>Originator</td>
                            <td>{this.state.data["Originator"]}</td>
                        </tr>
                    </tbody>    
                </table>
            </div>
            
            {/* {this.state.data.Agreement} */}
        </div>
      }
}


export default Dashboard;

