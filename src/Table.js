import React, { Component } from 'react';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ["sdsadsds"]
        }
    }

    populate = (event) => {
        this.setState(this.props.data);
        console.log(this.props.data)
    }

    render(){
        if(this.state.data){
            return <div>
                <button onClick={this.populate}>click</button>
        <table>
            <tbody>
                <tr>
                    <td>{this.state.data[0]}</td>
                    <td>{this.state.data[0]}</td>
                </tr>
            </tbody>
        </table>
        </div>
        }
        else{
            return <div>no data</div>
        }
        
    }
}

export default Table;
